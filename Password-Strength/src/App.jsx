import React from 'react';
import PasswordStrength from './PasswordStrength';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Password Strength Checker</h1>
        <p>Check how strong your password is</p>
      </header>
      
      <main className="App-main">
        <PasswordStrength />
      </main>
      
      <footer className="App-footer">
        <p>Use strong passwords to protect your accounts</p>
      </footer>
    </div>
  );
}

export default App;