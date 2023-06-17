/*!
 * CookieConsent Config for Locarnofestival.ch
 */
const iframesYT=document.getElementsByTagName("iframe"),posterIFrameDisable="https://cdn.jsdelivr.net/gh/locarno-festival/cconsent/dist/iframe.disabled.svg";var cc,gtmloaded=pixelloaded=!1;(disableIframes=function(){for(let e of iframesYT)ifrsrc=e.src,(/you/.test(ifrsrc)||/vimeo/.test(ifrsrc))&&(e.src="./cc_consent/iframe.disabled.svg",e.setAttribute("data-href",ifrsrc),e.classList.add("disabled-ifr"))})(),window.addEventListener("load",function(){$('<span>|</span><a href="javascript:void(0)" data-cc="c-settings" class="cc-link" aria-haspopup="dialog">Privacy Settings</a>').appendTo($(".menu-privacy h6")),(cc=initCookieConsent()).run({current_lang:"en",autoclear_cookies:!1,page_scripts:!1,delay:100,auto_language:"document",autorun:!0,force_consent:!0,remove_cookie_tables:!0,hide_from_bots:!0,cookie_name:"lff_cc_cookie",cookie_expiration:90,cookie_necessary_only_expiration:182,revision:4,onFirstAction:function(e,t){},onAccept:function(e){loadExtTracking()},onChange:function(e,t){loadExtTracking()},languages:{en:{consent_modal:{title:"Privacy preferences",description:'This site uses essential cookies for its operation and tracking cookies to enhance your experience. Tracking cookies will be activated only with your consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',primary_btn:{text:"Accept all",role:"accept_all"},secondary_btn:{text:"Reject all",role:"accept_necessary"}},settings_modal:{title:"Cookie preferences",save_settings_btn:"Save settings",accept_all_btn:"Accept all",reject_all_btn:"Reject all",close_btn_label:"Close",blocks:[{title:"Cookie usage",description:'We use cookies and other tracking technologies to improve your browsing experience on our website for the following purposes: measure your interest in our products and services and to personalize marketing interactions. To find out more, please read our <a href="https://www.locarnofestival.ch/LFF/extra/cookie-policy.html">Cookie Policy</a> and <a href="https://www.locarnofestival.ch/LFF/extra/privacy-policy.html">Privacy policy</a>.<br/><br/>You can change your privacy preferences by visiting <button type="button" data-cc="c-settings" class="cc-link">Privacy preferences</button>'},{title:"Strictly necessary cookies",description:"These cookies help us make our website usable, enable basic functions and secure areas of the website. The website cannot function properly without these cookies.<br/><br/><strong>Locarnofestival.ch, Festival Internazionale del Film di Locarno </strong> | Login and interactions",toggle:{value:"necessary",enabled:!0,readonly:!0}},{title:"Performance and Analytics cookies",description:"Analytics cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.<br/>By not consenting to the use of Performance and Analytics cookies, some features of the site may not work properly.<br/><br/><strong>Google Tag Manager (Google Inc.)</strong> | Usage data<br/><br/><strong>Google Analytics (Google Inc.)</strong> | Usage data<br/><br/><strong>Smeetz.com (Smeetz SA)</strong> | Usage data, ticket purchasing activities",toggle:{value:"analytics",enabled:!1,readonly:!1}},{title:"Advertisement and Targeting cookies",description:"Marketing cookies are used to create user profiles or to track the user on this website or across several websites for marketing purposes. These cookies may also be used for advertising purposes.<br/>By not consenting to the use of Advertising and Targeting cookies, you may rvisualize content that does not take into account your personal interests or user profile.<br/><br/><strong>Facebook Pixel (Meta Inc.)</strong> | Usage data, Marketing tracking<br/><br/><strong>TikTok Pixel (TikTok Technology Limited)</strong> | Usage data, Marketing tracking<br/><br/><strong>Youtube.com (Google Inc.)</strong> | Usage data of embed video views<br/><br/><strong>Vimeo.com (Vimeo Inc.)</strong> | Usage data of embed video views",toggle:{value:"targeting",enabled:!1,readonly:!1}},{title:"More information",description:'For any queries in relation to our policy on cookies and privacy, please <a class="cc-link" href="mailto:privacy@locarnofestival.ch">contact us</a>.'}]}},it:{consent_modal:{title:"Preferenze privacy",description:'Questo sito utilizza cookie essenziali per il suo funzionamento e cookie di tracciamento per migliorare l\'esperienza. I cookie di tracciamento saranno attivati solo con il tuo consenso. Per saperne di pi\xf9 o per rinunciare, leggi la nostra <a href="https://www.locarnofestival.ch/LFF/extra/cookie-policy.html">Politica dei cookie</a> e l\'<a href="https://www.locarnofestival.ch/LFF/extra/privacy-policy.html">Informativa sulla privacy</a>. <br/><br/>Puoi cambiare le tue preferenze sulla privacy: <button type="button" data-cc="c-settings" class="cc-link">configura preferenze</button>',primary_btn:{text:"Accetta tutto",role:"accept_all"},secondary_btn:{text:"Rifiuta tutto",role:"accept_necessary"}},settings_modal:{title:"Preferenze sulla Privacy",save_settings_btn:"Salva impostazioni",accept_all_btn:"Accetta tutto",reject_all_btn:"Rifiuta",close_btn_label:"Chiudi",blocks:[{title:"Utilizzo dei cookies",description:'In questa pagina puoi modificare le tue preferenze sulla privacy e saperne di pi\xf9 sui fornitori con cui collaboriamo.<br/>Per ulteriori dettagli relativi ai cookie e ad altri dati sensibili, si prega di leggere l\'intero documento <a href="https://www.locarnofestival.ch/LFF/extra/privacy-policy.html" class="cc-link">Privacy Policy</a>.'},{title:"Cookies essenziali",description:"Questi cookies ci aiutano a rendere utilizzabile il nostro sito web, abilitano le funzioni di base e proteggono le aree del sito web. Il sito web non pu\xf2 funzionare correttamente senza questi fornitori.<br/><br/><strong>Locarnofestival.ch, Festival Internazionale del Film di Locarno </strong> | Login e interazione<br/><br/><strong>Youtube.com (Google Inc.)</strong> | Dati di utilizzo visualizzazione video<br/><br/><strong>Vimeo.com (Vimeo Inc.)</strong> | Dati di utilizzo visualizzazione video",toggle:{value:"necessary",enabled:!0,readonly:!0}},{title:"Cookies di performance e analisi",description:"I cookies di analisi ci aiutano a capire come i visitatori interagiscono con il nostro sito web raccogliendo e riportando informazioni in forma anonima.<br/>Non acconsentendo all'utilizzo dei cookie di Performance e Analisi, alcune funzioni del sito potrebbero non funzionare correttamente.<br/><br/><strong>Google Tag Manager (Google Inc.)</strong> | Dati di utilizzo<br/><br/><strong>Google Analytics (Google Inc.)</strong> | Dati di utilizzo<br/><br/><strong>Smeetz.com (Smeetz SA)</strong> | Dati di utilizzo, acquisto biglietti",toggle:{value:"analytics",enabled:!1,readonly:!1}},{title:"Cookies di marketing",description:"I cookies di marketing sono utilizzati per creare profili utente o per tracciare l'utente su questo sito web o su diversi siti web per scopi di marketing. Questi fornitori possono anche essere utilizzati per scopi pubblicitari.<br/>Non acconsentendo all'utilizzo dei cookie di Pubblicit\xe0 e Targeting, potresti visualizzare contenuti che non tengono conto dei tuoi interessi personali o del tuo profilo utente.<br/><br/><strong>Facebook Pixel (Meta Inc.)</strong> | Dati di utilizzo, Tracking di marketing<br/><br/><strong>TikTok Pixel (TikTok Technology Limited)</strong> | Dati di utilizzo, Tracking di marketing<br/><br/>",toggle:{value:"targeting",enabled:!1,readonly:!1}},{title:"Maggiori informazioni",description:'Per ulteriori informazioni riguardo la nostra politica di Privacy e utilizzo dei cookies <a class="cc-link" href="mailto:privacy@locarnofestival.ch">contattaci</a>.'}]}}},gui_options:{consent_modal:{layout:"cloud",position:"middle center",transition:"slide",swap_buttons:!1},settings_modal:{layout:"box",transition:"slide"}}})}),loadGTM=function(){if(!gtmloaded){var e,t,i,o,a="script",n="dataLayer";e=window,t=document,e[n]=e[n]||[],e[n].push({"gtm.start":new Date().getTime(),event:"gtm.js"}),i=t.getElementsByTagName(a)[0],(o=t.createElement(a)).async=!0,o.src="https://www.googletagmanager.com/gtm.js?id=GTM-N47WHX2"+("dataLayer"!=n?"&l="+n:""),i.parentNode.insertBefore(o,i),gtmloaded=!0}},loadPixels=function(){if(!pixelloaded){var e,t,i,o,a,n="script";e=window,t=document,e.fbq||(i=e.fbq=function(){i.callMethod?i.callMethod.apply(i,arguments):i.queue.push(arguments)},e._fbq||(e._fbq=i),i.push=i,i.loaded=!0,i.version="2.0",i.queue=[],(o=t.createElement(n)).async=!0,o.src="https://connect.facebook.net/en_US/fbevents.js",(a=t.getElementsByTagName(n)[0]).parentNode.insertBefore(o,a)),fbq("init","569570650379967"),fbq("track","PageView"),function(e,t,i){e.TiktokAnalyticsObject=i;var o=e[i]=e[i]||[];o.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],o.setAndDefer=function(e,t){e[t]=function(){e.push([t].concat(Array.prototype.slice.call(arguments,0)))}};for(var a=0;a<o.methods.length;a++)o.setAndDefer(o,o.methods[a]);o.instance=function(e){for(var t=o._i[e]||[],i=0;i<o.methods.length;i++)o.setAndDefer(t,o.methods[i]);return t},o.load=function(e,t){var a="https://analytics.tiktok.com/i18n/pixel/events.js";o._i=o._i||{},o._i[e]=[],o._i[e]._u=a,o._t=o._t||{},o._t[e]=+new Date,o._o=o._o||{},o._o[e]=t||{},(t=document.createElement("script")).type="text/javascript",t.async=!0,t.src=a+"?sdkid="+e+"&lib="+i,(e=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,e)},o.load("CGGOB53C77UCVI790F3G"),o.page()}(window,document,"ttq"),pixelloaded=!0}},clearCookiesTracking=function(){for(var e=document.cookie.split(/=[^;]*(?:;\s*|$)/),t=0;t<e.length;t++)(0===e[t].indexOf("_tt")||0===e[t].indexOf("_fb"))&&(document.cookie=e[t]+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT");pixelloaded=!1},clearCookiesAnalytics=function(){for(var e=document.cookie.split(/=[^;]*(?:;\s*|$)/),t=0;t<e.length;t++)(0===e[t].indexOf("_ga")||0===e[t].indexOf("_gi"))&&(document.cookie=e[t]+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT");gtmloaded=!0},iframeEnable=function(){$(".disabled-ifr").each(function(){$(this).attr("src",$(this).attr("data-href"))})},loadExtTracking=function(){loadAccepted=cc.getUserPreferences().accepted_categories,console.log(cc.getUserPreferences().accepted_categories),loadAccepted.includes("targeting")?(iframeEnable(),loadPixels()):(clearCookiesTracking(),disableIframes()),loadAccepted.includes("analytics")?loadGTM():clearCookiesAnalytics()};