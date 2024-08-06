'use client'
import React, { useEffect } from 'react';

export default function CLiengo() {
    useEffect(() => {
        // Código de instalación Cliengo para www.metalroofing.com.mx
        (function () {
          var ldk = document.createElement('script');
          ldk.type = 'text/javascript';
          ldk.async = true;
          ldk.src = 'https://s.cliengo.com/weboptimizer/641dae8cbcaed5002571ecd4/641dae8ebcaed5002571ece4.js?platform=view_installation_code';
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(ldk, s);
        })();
      }, []);
      return(<></>);
}
