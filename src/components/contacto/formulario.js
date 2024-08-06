import React, { useEffect } from 'react';
import Head from 'next/head';

const HubspotForm = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//js.hsforms.net/forms/embed/v2.js";
        script.type = "text/javascript";
        script.charset = "utf-8";
        script.async = true;

        script.onload = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: "45344102",
                    formId: "5027b8a1-3aec-452a-bab7-328d1a83af66",
                    target: "#hubspotForm",
                    onFormReady: ($form) => {
                        const fileInputWrapper = document.createElement('div');
                        fileInputWrapper.style.marginTop = '20px';
                        const fileInputLabel = document.createElement('label');
                        fileInputLabel.innerText = 'Adjuntar documento:';
                        fileInputLabel.style.display = 'block';
                        fileInputLabel.style.marginBottom = '10px';
                        const fileInput = document.createElement('input');
                        fileInput.type = 'file';
                        fileInput.name = 'adjunto';
                        fileInput.style.display = 'block';
                        
                        fileInputWrapper.appendChild(fileInputLabel);
                        fileInputWrapper.appendChild(fileInput);

                        $form.find('form').append(fileInputWrapper);
                    }
                });
            }
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <Head>
                <script src="//js.hsforms.net/forms/embed/v2.js" type="text/javascript" charset="utf-8" async></script>
            </Head>
            <div id="hubspotForm"></div>
        </>
    );
};

export default HubspotForm;
