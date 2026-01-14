import React from 'react';

function ConditionalMessage() {
  const isLoggedIn = false; 
  let message; 

  if (isLoggedIn) {
    message = "Wilujeng Sumping!";
  } else {
    message = "Login dulu der.";
  }

  return (
    <div>
      <h2>Contoh Conditional Rendering</h2>
      <p>{message}</p>
    </div>
  );
}

export default ConditionalMessage;
