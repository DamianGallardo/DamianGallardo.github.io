import React from 'react';
import styled from 'styled-components';

const FullWidthBox = styled.div`
  width: 100%;
  background-color: #000000;
  padding: 40px 20px;
  box-sizing: border-box;
  text-align: center;
  color: #ffffff;
`;

const Heading = styled.h1`
  color: #5D8DC5;
  margin-bottom: 20px;
  font-size:35px;
`;

const Description = styled.p`
  margin-bottom: 30px;
  font-size: 20px;
`;

const WhatsAppButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #128c7e;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    background-color: #cc0000;
  }
`;

function CallToAction() {
  const whatsappNumber = '+523329588580'; // Reemplaza con tu número de WhatsApp
  const message = 'Hola, quisiera cotizar con ustedes. ¿Me podrían proporcionar más información?'; 

  const handleButtonClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="App">
      <FullWidthBox>
        <Heading>¡SOLUCIONES A TU MEDIDA!</Heading>
        <Description>Estamos listos para personalizar y cotizar un proyecto que se ajuste perfectamente a tus necesidades empresariales.</Description>
        <WhatsAppButton onClick={handleButtonClick}>
          SOLICITAR MÁS INFORMACIÓN
        </WhatsAppButton>
      </FullWidthBox>
    </div>
  );
}

export default CallToAction;
