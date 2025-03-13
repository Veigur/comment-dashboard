import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [authUrl, setAuthUrl] = useState("");

  useEffect(() => {
    axios.get("https://ohulnqhm8a.execute-api.us-east-1.amazonaws.com/prod/oauth-url")
      .then(response => {
        setAuthUrl(response.data.auth_url);
      })
      .catch(error => console.error("Error fetching OAuth URL:", error));
  }, []);

  return (
    <div>
      <h1>YouTube OAuth Integration</h1>
      {authUrl ? (
        <a href={authUrl}>
          <button>Authorize YouTube Access</button>
        </a>
      ) : (
        <p>Loading authorization URL...</p>
      )}
    </div>
  );
}

export default App;