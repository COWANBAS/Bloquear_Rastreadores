// ==UserScript==
// @name          Bloqueio de Rastreadores
// @description   Bloquear rastreadores de dados pessoais em qualquer site, permitindo a pesquisa no Google
// @namespace     CowanBlock
// @license       CowBas
// @version       3.0
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
      const blockedDomains = [
        'google-analytics.com', 'facebook.com', 'doubleclick.net', 'adsense.com',
        'googletagmanager.com', 'twitter.com', 'amazon-adsystem.com', 'yahoo.com',
        'bing.com', 'quantserve.com', 'scorecardresearch.com', 'adnxs.com',
        'taboola.com', 'outbrain.com', 'criteo.com', 'appnexus.com', 'rubiconproject.com',
        'pubmatic.com', 'openx.com', 'revcontent.com', 'zedo.com', 'bluekai.com',
        'adroll.com', 'perfectaudience.com', 'mathtag.com', 'turn.com', 'mediamath.com',
        'adform.net', 'nexac.com', 'eyeota.net', 'exelator.com', 'liveramp.com',
        'demdex.net', 'krxd.net', 'ml314.com', 'adobe.com', 'optimizely.com',
        'mixpanel.com', 'hotjar.com', 'segment.com', 'clicktale.net', 'kissmetrics.com',
        'clicky.com', 'crazyegg.com', 'newrelic.com', 'trackjs.com', 'fullstory.com',
        'logrocket.com', 'woopra.com', 'heap.io', 'smartlook.com', 'mouseflow.com',
        'inspectlet.com', 'userzoom.com', 'humanyze.com', 'quantcast.com', 'simpli.fi',
        'drawbridge.com', 'thetradedesk.com', 'ipredictive.com', 'flashtalking.com',
        'gumgum.com', 'yieldmo.com', 'adzerk.net', 'media.net', 'sovrn.com', 'gumgum.com',
        'brightcove.com', 'chartbeat.com', 'comscore.com', 'conviva.com', 'doubleverify.com',
        'dynatrace.com', 'evergage.com', 'flixmedia.tv', 'gaug.es', 'gemius.pl', 'ghostery.com',
        'gigya.com', 'kaltura.com', 'lotame.com', 'mediaradar.com', 'moat.com', 'nielsen.com',
        'parsely.com', 'permutive.com', 'plausible.io', 'quantcast.com', 'repubhub.com',
        'sharethrough.com', 'sizmek.com', 'sketchfab.com', 'tealiumiq.com', 'trustpilot.com',
        'unrulymedia.com', 'usercentrics.com', 'vidible.tv', 'visualwebsiteoptimizer.com',
        'webtrends.com', 'yandex.ru', 'zopim.com'
      ];
      if (blockedDomains.some(domain => src && src.includes(domain))) {
        script.parentNode.removeChild(script);
      }
    }
  };

  // Bloquear rastreadores ao carregar a página
  window.addEventListener('load', () => {
    blockThirdPartyScripts();
  });

  // Bloquear iframe de rastreadores, permitindo apenas pesquisa do Google
  const blockIframes = () => {
    const iframes = document.getElementsByTagName('iframe');
    for (let i = 0; i < iframes.length; i++) {
      const iframe = iframes[i];
      const src = iframe.getAttribute('src');
      // Permite apenas iframes de pesquisa no Google
      if (src && !(src.includes('google.com') && src.includes('search'))) {
        iframe.parentNode.removeChild(iframe);
      }
    }
  };

  // Bloquear se houver iframes
  blockIframes();
})();