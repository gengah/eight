// src/components/WhatsAppButton.js
import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '254727856279'; // Replace with your WhatsApp number (no + sign)

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.button}
    >
      💬 WhatsApp
    </a>
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25D366',
    color: '#fff',
    padding: '12px 18px',
    borderRadius: '50px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    textDecoration: 'none',
    fontWeight: 'bold',
    zIndex: 1000,
  },
};

export default WhatsAppButton;
