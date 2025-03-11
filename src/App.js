import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [comments, setComments] = useState([]);
  const API_URL = 'https://ohulnqhm8a.execute-api.us-east-1.amazonaws.com/prod/';

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        console.log(response.data); // debug line to confirm API response
        setComments(response.data.comments);
      })
      .catch(err => console.error('API call failed:', err));
  }, []);

  return (
    <div>
      <h1>Comment Dashboard</h1>
      {comments.length === 0 ? (
        <p>No comments yet!</p>
      ) : (
        comments.map(comment => (
          <div key={comment.CommentID}>
            <h3>{comment.CommentText}</h3>
            <p>Sentiment: {comment.Sentiment}</p>
            <p>Key Phrases: {comment.KeyPhrases.join(", ")}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
