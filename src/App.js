import React from "react";

const API_URL = "https://api.audience-vision.com/oauth-url"; // Your API Gateway URL

function App() {
  const handleLogin = () => {
    window.location.href = API_URL; // Redirects user to OAuth flow
  };

  return (
    <div>
      <h1>Social Comment Analyzer</h1>
      <button onClick={handleLogin}>Login with YouTube</button>
    </div>
  );
}

export default App;
