// ==UserScript==
// @name          Bloqueio de Rastreadores
// @description   Bloquear rastreadores de dados pessoais em qualquer site, permitindo a pesquisa no Google
// @version       1.0
// @author        Cowanbas
// @match         *://*/*
// @run-at        document-start
// ==/UserScript==

(function () {
  // Limpar cookies
  document.cookie.split(';').forEach(function (c) {
    document.cookie = c
      .replace(/^ +/, '')
      .replace(/(=.*|$)/, '=;expires=' + new Date().toUTCString() + ';path=/');
  });

  // Bloquear rastreadores de scripts de terceiros
  const blockThirdPartyScripts = () => {
    const scriptTags = document.getElementsByTagName('script');
    for (let i = 0; i < scriptTags.length; i++) {
      let script = scriptTags[i];
      const src = script.getAttribute('src');
      // Bloqueia links de scripts de rastreadores conhecidos
      const blockedDomains = ['google-analytics.com', 'facebook.com', 'doubleclick.net'];
      if (blockedDomains.some(domain => src.includes(domain))) {
        script.parentNode.removeChild(script);
      }
    }
  };

  // Bloquear rastreadores ao carregar a página
  window.addEventListener('load', () => {
    blockThirdPartyScripts();
  });

  // Bloquear iframe de rastreadores
  const blockIframes = () => {
    const iframes = document.getElementsByTagName('iframe');
    for (let i = 0; i < iframes.length; i++) {
      const iframe = iframes[i];
      const src = iframe.getAttribute('src');
      // Permite a pesquisa no Google
      if (src.includes('google.com') && src.includes('search')) {
        continue; // Permite o iframe da pesquisa
      }
      // Bloqueia links de iframes de rastreadores conhecidos
      const blockedDomains = ['youtube.com', 'vimeo.com', 'google.com'];
      if (blockedDomains.some(domain => src.includes(domain))) {
        iframe.parentNode.removeChild(iframe);
      }
    }
  };

  // Bloquear se houver iframes
  blockIframes();
})();