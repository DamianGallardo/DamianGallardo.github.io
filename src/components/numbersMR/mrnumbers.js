import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #000;
  color: #fff;
  display: grid;
  grid-template-areas:
    "title title"
    "image list";
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-items: center;
  height: 95vh;
  margin: 0;
  text-align: left;

  @media (max-width: 768px) {
    grid-template-areas:
      "title"
      "image"
      "list";
    grid-template-columns: 1fr;
    height: auto;
    padding: 20px;
  }
`;

const TitleImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: title;
  margin-top: 20px;
  width: 20vw;
  height: auto;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
    height: auto;
  }
`;

const TitleStyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const MainImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: image;
  margin-top: 20px;
`;

const MainStyledImage = styled.img`
  max-width: 100%;
  height: auto;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const PlaceholderImage = styled.div`
  width: 50vw;
  height: 50vw;
  background-color: #444;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  grid-area: list;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const ListItem = styled.li`
  font-size: 24px;
  margin: 20px 0;
  color: #5d8dc5;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CounterNumberSuffix = styled.h2`
  color: #5d8dc5;
  font-size: 40px;
  font-weight: bold;
  margin-right: 5px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const CounterText = styled.p`
  color: #fff;
  font-size: 18px;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Counter = React.memo(({ end, duration, suffix_1, suffix_2, text }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const startCount = useCallback(() => {
    let start = 0;
    const endNum = parseFloat(end);
    const incrementTime = (duration / endNum) * 1000;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= endNum) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);  // Dejar de observar una vez visible
        }
      });
    }, options);

    observer.observe(document.getElementById(`counter-${end}`));

    return () => {
      observer.disconnect();
    };
  }, [end]);

  useEffect(() => {
    if (isVisible) {
      startCount();
    }
  }, [isVisible, startCount]);

  return (
    <ListItem id={`counter-${end}`} style={{ opacity: isVisible ? 1 : 0 }}>
      <div>
        <CounterNumberSuffix>
          {suffix_1}
          {count}
          {suffix_2}
        </CounterNumberSuffix>
        <CounterText>{text}</CounterText>
      </div>
    </ListItem>
  );
});

const Mrnumbers = ({ imageUrl, titleImageUrl }) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  const handleImageError = () => {
    setImageLoaded(false);
  };

  return (
    <Container>
      <TitleImageContainer>
        {imageLoaded ? (
          <TitleStyledImage src={titleImageUrl} alt="Título" onError={handleImageError} />
        ) : (
          <PlaceholderImage>Imagen no disponible</PlaceholderImage>
        )}
      </TitleImageContainer>
      <MainImageContainer>
        <MainStyledImage src={imageUrl} alt="Imagen" />
      </MainImageContainer>
      <List>
        <Counter end={20} duration={2} suffix_1="+ " text="AÑOS DE EXPERIENCIA" />
        <Counter end={200} duration={2} suffix_1="+" text="PROYECTOS EXITOSOS" />
        <Counter suffix_1="+" end={2} duration={1} suffix_2=" MILLONES" text="DE METROS CUADRADOS DE LAMINA INSTALADA" />
        <Counter suffix_1="+" end={2} duration={1} suffix_2=" MILLONES" text="DE METROS CUADRADOS DE AISLANTES INSTALADOS" />
        <Counter suffix_1="+" end={1} duration={1} suffix_2=" MILLÓN" text="DE TRANSLUCIDOS INSTALADOS" />
      </List>
    </Container>
  );
};

const App = () => {
  return (
    <div>
      <Mrnumbers 
        imageUrl="assets/numbersMR/Mapa_web_fondonegro-conesporas.png" 
        titleImageUrl="assets/logo/MR-Rectangular-Metalico-01.png"
      />
    </div>
  );
};

export default App;
