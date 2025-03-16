import React from "react";

const API_URL = "https://accounts.google.com/o/oauth2/auth?client_id=790204760836-gkr9ah7vrfd3gkgtc6l93o8e0ku7pdas.apps.googleusercontent.com&redirect_uri=https://master.d377jcy0z3tkft.amplifyapp.com/oauth-callback&response_type=code&scope=https://www.googleapis.com/auth/youtube.readonly&access_type=offline"; 

function App() {
  const handleLogin = () => {
    window.location.href = API_URL; // Redirects user to Google OAuth
  };

  return (
    <div>
      <h1>Social Comment Analyzer</h1>
      <button onClick={handleLogin}>Login with YouTube</button>
    </div>
  );
}

export default App;
