// ==UserScript==
// @name          Bloqueio de Rastreadores
// @description   Bloquear rastreadores de dados pessoais em qualquer site, permitindo a pesquisa no Google
// @namespace     CowanBlock
// @license       CowBas
// @version       2.0
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
      const blockedDomains = ['google-analytics.com', 'facebook.com', 'doubleclick.net', 'adsense.com',
    'googletagmanager.com', 'twitter.com', 'amazon-adsystem.com', 'yahoo.com',
    'bing.com', 'quantserve.com', 'scorecardresearch.com', 'adnxs.com',
    'newrelic.com', 'mixpanel.com', 'optimizely.com', 'hotjar.com',
    'crazyegg.com', 'clicktale.net', 'fullstory.com', 'kissmetrics.com',
    'matomo.org', 'piwik.pro', 'statcounter.com', 'chartbeat.com',
    'segment.com', 'heap.io', 'inspectlet.com', 'logrocket.com',
    'flurry.com', 'appsflyer.com', 'branch.io', 'adjust.com',
    'kochava.com', 'clevertap.com', 'moengage.com', 'onesignal.com',
    'swrve.com', 'airship.com', 'applovin.com', 'tapjoy.com',
    'unity3d.com', 'vungle.com', 'ironsrc.com', 'inmobi.com',
    'adroll.com', 'perfectaudience.com', 'criteo.com', 'outbrain.com',
    'taboola.com', 'revcontent.com', 'zergnet.com', 'mgid.com',
    'content.ad', 'plista.com', 'nativo.com', 'sharethrough.com',
    'pubmatic.com', 'rubiconproject.com', 'openx.com', 'indexexchange.com',
    'appnexus.com', 'smaato.com', 'spotx.tv', 'fyber.com',
    'chartboost.com', 'adcolony.com', 'liftoff.io', 'taptica.com',
    'mediamath.com', 'thetradedesk.com', 'xandr.com', 'verizonmedia.com',
    'simplifi.com', 'voxmedia.com', 'sojern.com', 'adara.com',
    'traveladnetwork.com', 'adzerk.com', 'gumgum.com', 'sublime.com',
    'yieldmo.com', 'triplelift.com', 'teads.tv', 'tabmo.io',
    'kargo.com', 'unruly.co', 'smartadserver.com', 'adform.com',
    'bidtellect.com', 'connatix.com', 'adsymptotic.com', 'datonics.com',
    'alphonso.tv', 'comscore.com', 'nielsen.com', 'experian.com',
    'bluekai.com', 'liveramp.com', 'neustar.biz', 'oracle.com',
    'quantcast.com', 'mopub.com', 'admob.com', 'doubleverify.com',
    'integralads.com', 'whiteops.com', 'zvelo.com', 'shield.io',
    'permutive.com', 'perimeterx.com', 'securiti.ai', 'trustarc.com',
    'onetrust.com', 'privitar.com', 'bigid.com', 'osano.com',
    'wirewheel.io', 'radware.com', 'cloudflare.com', 'akamai.com'];
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
      const blockedDomains = ['youtube.com', 'vimeo.com', 'google.com', 'facebook.com', 'instagram.com',
        'twitter.com', 'linkedin.com', 'tiktok.com', 'snapchat.com'];
      if (blockedDomains.some(domain => src.includes(domain))) {
        iframe.parentNode.removeChild(iframe);
      }
    }
  };

  // Bloquear se houver iframes
  blockIframes();
})();
