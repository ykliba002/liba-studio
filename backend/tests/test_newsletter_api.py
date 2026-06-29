"""Backend API tests for MacBook landing page newsletter endpoints."""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    # Fallback for direct backend tests if env var not exported in shell
    with open("/app/frontend/.env") as f:
        for line in f:
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip().rstrip("/")
                break


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---- Root / health ----
def test_api_root_returns_200(api_client):
    r = api_client.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    data = r.json()
    assert "message" in data
    assert isinstance(data["message"], str)
    assert len(data["message"]) > 0


# ---- Newsletter: create ----
def test_newsletter_subscribe_valid_email(api_client):
    email = f"TEST_user_{uuid.uuid4().hex[:8]}@example.com"
    r = api_client.post(f"{BASE_URL}/api/newsletter", json={"email": email})
    assert r.status_code == 200, r.text
    data = r.json()
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert data["email"] == email
    assert "subscribed_at" in data


# ---- Newsletter: idempotency ----
def test_newsletter_subscribe_duplicate_email_is_idempotent(api_client):
    email = f"TEST_dup_{uuid.uuid4().hex[:8]}@example.com"
    r1 = api_client.post(f"{BASE_URL}/api/newsletter", json={"email": email})
    assert r1.status_code == 200, r1.text
    d1 = r1.json()

    r2 = api_client.post(f"{BASE_URL}/api/newsletter", json={"email": email})
    assert r2.status_code == 200, r2.text
    d2 = r2.json()

    # Same record returned, no 500
    assert d2["email"] == email
    assert d2["id"] == d1["id"]


# ---- Newsletter: invalid email ----
def test_newsletter_subscribe_invalid_email_returns_422(api_client):
    r = api_client.post(f"{BASE_URL}/api/newsletter", json={"email": "not-an-email"})
    assert r.status_code == 422


def test_newsletter_subscribe_missing_email_returns_422(api_client):
    r = api_client.post(f"{BASE_URL}/api/newsletter", json={})
    assert r.status_code == 422


# ---- Newsletter: count ----
def test_newsletter_count_returns_numeric(api_client):
    r = api_client.get(f"{BASE_URL}/api/newsletter/count")
    assert r.status_code == 200
    data = r.json()
    assert "count" in data
    assert isinstance(data["count"], int)
    assert data["count"] >= 0


def test_newsletter_count_increments_after_subscribe(api_client):
    before = api_client.get(f"{BASE_URL}/api/newsletter/count").json()["count"]

    email = f"TEST_inc_{uuid.uuid4().hex[:8]}@example.com"
    r = api_client.post(f"{BASE_URL}/api/newsletter", json={"email": email})
    assert r.status_code == 200

    after = api_client.get(f"{BASE_URL}/api/newsletter/count").json()["count"]
    assert after == before + 1

    # Duplicate should NOT increment count
    api_client.post(f"{BASE_URL}/api/newsletter", json={"email": email})
    after2 = api_client.get(f"{BASE_URL}/api/newsletter/count").json()["count"]
    assert after2 == after
