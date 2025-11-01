import React, { useState } from 'react';

const PasswordStrength = () => {
  const [password, setPassword] = useState('');

  const getStrength = (pass) => {
    if (pass.length === 0) return { width: '0%', color: 'gray', text: '' };
    if (pass.length < 4) return { width: '25%', color: 'red', text: 'Weak' };
    if (pass.length < 8) return { width: '50%', color: 'orange', text: 'Fair' };
    if (pass.length < 12) return { width: '75%', color: 'blue', text: 'Good' };
    return { width: '100%', color: 'green', text: 'Strong' };
  };

  const strength = getStrength(password);

  return (
    <div style={{
      background: 'white',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '100%'
    }}>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '15px',
          border: '2px solid #ddd',
          borderRadius: '6px',
          fontSize: '16px',
          boxSizing: 'border-box'
        }}
      />
      
      <div style={{
        width: '100%',
        height: '10px',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px',
        overflow: 'hidden',
        marginBottom: '8px'
      }}>
        <div 
          style={{
            width: strength.width,
            height: '100%',
            backgroundColor: strength.color,
            transition: 'all 0.3s ease',
            borderRadius: '5px'
          }}
        />
      </div>
      
      <div style={{
        fontSize: '14px',
        fontWeight: '600',
        textAlign: 'center'
      }}>
        {strength.text && `Strength: ${strength.text}`}
      </div>
    </div>
  );
};

export default PasswordStrength;