// FloatingWhatsAppButton.js
'use client'; // Marca este archivo como un componente de cliente si estás usando Next.js

import React from 'react';
import './FloatingWhatsAppButton.css'; // Importa el archivo CSS

export const FloatingWhatsAppButton = () => {
  const handleClick = () => {
    const phoneNumber = '+523329588580';
    const message = 'Hola, quisiera cotizar con ustedes. ¿Me podrían proporcionar más información?';
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <div className="floating-whatsapp-button" onClick={handleClick}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
    </div>
  );
};

export default FloatingWhatsAppButton;
