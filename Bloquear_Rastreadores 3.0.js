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
        'taboola.com', 'outbrain.com', 'criteo.com', 'appsflyer.com', 'newrelic.com',
        'mixpanel.com', 'hotjar.com', 'matomo.org', 'cloudflare.com', 'optimizely.com',
        'pingdom.com', 'segment.com', 'adroll.com', 'bluekai.com', 'brightcove.com',
        'chartbeat.com', 'clicktale.net', 'comscore.com', 'crazyegg.com', 'disqus.com',
        'flashtalking.com', 'gigya.com', 'kissmetrics.com', 'lotame.com', 'moat.com',
        'nielsen.com', 'omniture.com', 'pardot.com', 'perfectaudience.com', 'quantcast.com',
        'rubiconproject.com', 'sharethis.com', 'simplifi.com', 'spotxchange.com', 'steelhouse.com',
        'turn.com', 'yieldmo.com', 'zopim.com', 'adobe.com', 'baidu.com', 'baidu.jp',
        'samsung.com', 'naver.com', 'baidustatic.com', 'googlesyndication.com', 'googleservices.com',
        'googleservice.com', 'googletagservices.com', 'googleusercontent.com', 'googlevideo.com',
        'googleadservices.com', 'googlesyndication.com', 'googleads.g.doubleclick.net',
        '2mdn.net', 'pubmatic.com', 'openx.net', 'adsafeprotected.com', 'media.net',
        'adsrvr.org', 'adform.net', 'adition.com', 'adscale.de', 'adserver.org',
        'advertising.com', 'advertserve.com', 'adtechus.com', 'adtech.de', 'adtech.com',
        'adobe.com', 'admob.com', 'adkernel.com', 'admanmedia.com', 'adobe.com', 'adserver.com',
        'adthrive.com', 'adup-tech.com', 'adversal.com', 'adzerk.net', 'yieldlab.net',
        'yandex.ru', 'yandex.com', 'yandex.net', 'yandex.ua', 'yandex.by', 'yandex.kg',
        'yandex.kz', 'yandex.tj', 'yandex.uz', 'yandex.com.tr', 'yandex.com.ge', 'yandex.com.am',
        'scorecardresearch.com', 'adnxs.com', 'adsymptotic.com', 'adzerk.net', 'adroll.com',
        'doubleverify.com', 'gumgum.com', 'krxd.net', 'ml314.com', 'quantserve.com',
        'serving-sys.com', 'simpli.fi', 'sizmek.com', 'smartadserver.com', 'spotxchange.com',
        'steelhousemedia.com', 'tapad.com', 'teads.tv', 'tribalfusion.com', 'triplelift.com',
        'trustpilot.com', 'turn.com', 'unrulymedia.com', 'viglink.com', 'xaxis.com',
        'zedo.com', 'zemanta.com', 'zopim.com'
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

  // Bloquear iframe de rastreadores
  const blockIframes = () => {
    const iframes = document.getElementsByTagName('iframe');
    for (let i = 0; i < iframes.length; i++) {
      const iframe = iframes[i];
      const src = iframe.getAttribute('src');
      // Permite a pesquisa no Google
      if (src && src.includes('google.com') && src.includes('search')) {
        continue; // Permite o iframe da pesquisa
      }
      // Bloqueia links de iframes de rastreadores conhecidos
      const blockedDomains = [
        'youtube.com', 'vimeo.com', 'google.com', 'facebook.com', 'instagram.com',
        'twitter.com', 'linkedin.com', 'tiktok.com', 'snapchat.com', 'pinterest.com',
        'tumblr.com', 'whatsapp.com', 'telegram.org', 'reddit.com', 'flickr.com',
        'medium.com', 'quora.com', 'weibo.com', 'vk.com', 'dailymotion.com',
        'slideshare.net', 'soundcloud.com', 'spotify.com', 'last.fm', 'mixcloud.com',
        'zoom.us', 'meet.google.com', 'hangouts.google.com', 'webex.com', 'skype.com',
        'teams.microsoft.com', 'slack.com', 'discord.com', 'zoom.us', 'web.whatsapp.com',
        'web.telegram.org', 'messenger.com', 'line.me', 'viber.com', 'signal.org',
        'wechat.com', 'qq.com', 'douyin.com', 'kakao.com', 'naver.com', 'twitch.tv',
        'bit.ly', 'tinyurl.com', 'ow.ly', 'is.gd', 'buff.ly', 'snip.ly', 'shorte.st',
        'brightcove.com', 'chartbeat.com', 'crazyegg.com', 'disqus.com', 'flashtalking.com',
        'gigya.com', 'kissmetrics.com', 'lotame.com', 'moat.com', 'nielsen.com',
        'omniture.com', 'pardot.com', 'perfectaudience.com', 'quantcast.com', 'rubiconproject.com',
        'sharethis.com', 'simplifi.com', 'spotxchange.com', 'steelhouse.com', 'turn.com',
        'yieldmo.com', 'zopim.com', 'adobe.com', 'baidu.com', 'baidu.jp', 'samsung.com',
        'naver.com', 'baidustatic.com', 'googlesyndication.com', 'googleservices.com',
        'googleservice.com', 'googletagservices.com', 'googleusercontent.com', 'googlevideo.com',
        'googleadservices.com', 'googlesyndication.com', 'googleads.g.doubleclick.net',
        '2mdn.net', 'pubmatic.com', 'openx.net', 'adsafeprotected.com', 'media.net',
        'adsrvr.org', 'adform.net', 'adition.com', 'adscale.de', 'adserver.org',
        'advertising.com', 'advertserve.com', 'adtechus.com', 'adtech.de', 'adtech.com',
        'adobe.com', 'admob.com', 'adkernel.com', 'admanmedia.com', 'adobe.com', 'adserver.com',
        'adthrive.com', 'adup-tech.com', 'adversal.com', 'adzerk.net', 'yieldlab.net',
        'yandex.ru', 'yandex.com', 'yandex.net', 'yandex.ua', 'yandex.by', 'yandex.kg',
        'yandex.kz', 'yandex.tj', 'yandex.uz', 'yandex.com.tr', 'yandex.com.ge', 'yandex.com.am'
      ];
      if (blockedDomains.some(domain => src && src.includes(domain))) {
        iframe.parentNode.removeChild(iframe);
      }
    }
  };

  // Bloquear se houver iframes
  blockIframes();
})();