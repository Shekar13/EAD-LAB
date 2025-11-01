import React from "react";

function Greeting(props) {
  return (
    <div>
      <h2>👋 Greetings!</h2>
      <p>Hello, {props.name}! Welcome to React 🚀</p>
    </div>
  );
}

export default Greeting;
