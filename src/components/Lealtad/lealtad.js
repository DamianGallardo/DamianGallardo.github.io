import React, { useEffect } from 'react';
import Head from 'next/head';

const Lealtad = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "46802650",
          formId: "d540ac91-d3c7-442b-b093-84cc2b1508f7",
          target: '#hubspotForm'
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
  };

  const formStyle = {
    width: '100%',
    maxWidth: '600px', // Puedes ajustar el ancho máximo según sea necesario
  };

  return (
    <div style={containerStyle}>
      <Head>
        <script
          type="text/javascript"
          src="//js.hsforms.net/forms/embed/v2.js"
          charSet="utf-8"
          async
        ></script>
      </Head>
      <div id="hubspotForm" style={formStyle}></div>
    </div>
  );
};

export default Lealtad;
