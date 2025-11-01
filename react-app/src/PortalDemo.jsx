import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

// Modal component using React Portal
function Modal({ children, onClose }) {
  const elRef = useRef(document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(elRef.current); // Append div to body
    return () => {
      document.body.removeChild(elRef.current); // Cleanup on unmount
    };
  }, []);

  return createPortal(
    <div className="backdrop" onClick={onClose} style={backdropStyle}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={modalStyle}>
        <h3 style={{ margin: '0 0 15px 0', color: '#1e88e5' }}>🚪 Portal Modal</h3>
        <p style={{ margin: '0 0 20px 0', fontSize: '16px', color: '#333' }}>{children}</p>
        <button 
          onClick={onClose}
          style={buttonStyle}
        >
          Close Modal
        </button>
      </div>
    </div>,
    elRef.current
  );
}

// Inline styles for simplicity
const backdropStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "12px",
  minWidth: "350px",
  textAlign: "center",
  boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
  border: "2px solid #1e88e5",
};

const buttonStyle = {
  backgroundColor: "#1e88e5",
  color: "white",
  border: "none",
  padding: "12px 24px",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "600",
  transition: "all 0.2s ease",
};

// Main component
export default function PortalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="page">
      <h2>🚪 Portal Demo</h2>
      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        Click the button to open a modal rendered using React Portal
      </p>
      <button 
        onClick={() => setOpen(true)}
        style={{
          ...buttonStyle,
          padding: "15px 30px",
          fontSize: "18px"
        }}
      >
        Open Portal Modal
      </button>
      {open && (
        <Modal onClose={() => setOpen(false)}>
          This content is rendered outside the main DOM tree using React Portal!
        </Modal>
      )}
    </div>
  );
}