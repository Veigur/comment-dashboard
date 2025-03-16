import { useEffect } from "react";

const BACKEND_API_URL = "https://api.audience-vision.com/oauth-url"; // Your backend API

function OAuthCallback() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authCode = urlParams.get("code");

    if (authCode) {
      fetch(BACKEND_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: authCode })
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Token Response:", data);
          // You can store the token in localStorage/sessionStorage
          // localStorage.setItem("access_token", data.access_token);
        })
        .catch((error) => console.error("Error exchanging token:", error));
    }
  }, []);

  return <h2>Authenticating...</h2>;
}

export default OAuthCallback;
