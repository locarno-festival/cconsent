const iframesYT = document.getElementsByTagName("iframe");
const posterIFrameDisable=	"https://cdn.jsdelivr.net/gh/locarno-festival/cconsent/dist/iframe.disabled.svg";
var cc; var gtmloaded=pixelloaded=false; 
	
disableIframes=function() {
	for (let item of iframesYT) {
		ifrsrc=item.src;
		if (/you/.test(ifrsrc) || /vimeo/.test(ifrsrc)) {
			item.src=posterIFrameDisable;
			item.setAttribute('data-href',ifrsrc)
			item.classList.add("disabled-ifr");
		}
	}	
}

disableIframes();

window.addEventListener('load', function(){

			$('<li class="footer__links__list-item"><a class="footer__links__list-item-link" href="javascript:void(0)" data-cc="c-settings" class="cc-link" aria-haspopup="dialog">Privacy Settings</a></li>').appendTo($('.footer__links__list:last'))
            cc = initCookieConsent();
			
			
			
            cc.run({
                current_lang: 'en',
                autoclear_cookies: false,                   
                page_scripts: false,                        

                 delay: 100,                               
                auto_language: 'document',                      
                autorun: true,                          
                force_consent: true,                   
				remove_cookie_tables: true,
                hide_from_bots: true,                   
                
                cookie_name: 'lff_cc_cookie_24',              
                cookie_expiration: 90,                 // default: 182 (days)
                cookie_necessary_only_expiration: 182,   // default: disabled
				revision: 5,                            // default: 0
                // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
               // cookie_domain: location.hostname,       // default: current domain
                // cookie_path: '/',                       // default: root
                // cookie_same_site: 'Lax',                // default: 'Lax'
                // use_rfc_cookie: false,                  // default: false


                onFirstAction: function(user_preferences, cookie){
                    
                },

                onAccept: function (cookie) {
				
					loadExtTracking()
					
                },

                onChange: function (cookie, changed_categories) {
					
					loadExtTracking()
					
                },

                languages: {
                    'en': {
                        consent_modal: {
                            title: 'Privacy preferences',
                            description: 'This site uses essential cookies for its operation and tracking cookies to enhance your experience. Tracking cookies will be activated only with your consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
                            primary_btn: {
                                text: 'Accept all',
                                role: 'accept_all'              // 'accept_selected' or 'accept_all'
                            },
                            secondary_btn: {
                                text: 'Reject all',
                                role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                            }
                        },
                        settings_modal: {
                            title: 'Cookie preferences',
                            save_settings_btn: 'Save settings',
                            accept_all_btn: 'Accept all',
                            reject_all_btn: 'Reject all',
                            close_btn_label: 'Close',
                           
                            
                            blocks: [
                                {
                                    title: 'Cookie usage',
                                    description: 'We use cookies and other tracking technologies to improve your browsing experience on our website for the following purposes: measure your interest in our products and services and to personalize marketing interactions. To find out more, please read our <a href="https://www.locarnofestival.ch/LFF/extra/cookie-policy.html">Cookie Policy</a> and <a href="https://www.locarnofestival.ch/LFF/extra/privacy-policy.html">Privacy policy</a>.<br/><br/>You can change your privacy preferences by visiting <button type="button" data-cc="c-settings" class="cc-link">Privacy preferences</button>'
                                }, {
                                    title: 'Strictly necessary cookies',
                                    description: 'These cookies help us make our website usable, enable basic functions and secure areas of the website. The website cannot function properly without these cookies.<br/><br/><strong>Locarnofestival.ch, Festival Internazionale del Film di Locarno </strong> | Login and interactions',
                                    toggle: {
                                        value: 'necessary',
                                        enabled: true,
                                        readonly: true         
                                    }
                                }, {
                                    title: 'Performance and Analytics cookies',
                                    description: 'Analytics cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.<br/>By not consenting to the use of Performance and Analytics cookies, some features of the site may not work properly.<br/><br/><strong>Google Tag Manager (Google Inc.)</strong> | Usage data<br/><br/><strong>Google Analytics (Google Inc.)</strong> | Usage data<br/><br/><strong>Smeetz.com (Smeetz SA)</strong> | Usage data, ticket purchasing activities',
                                    toggle: {
                                        value: 'analytics',    
                                        enabled: false,
                                        readonly: false
                                    }
                                    
                                }, {
                                    title: 'Advertisement and Targeting cookies',
                                    description: 'Marketing cookies are used to create user profiles or to track the user on this website or across several websites for marketing purposes. These cookies may also be used for advertising purposes.<br/>By not consenting to the use of Advertising and Targeting cookies, you may rvisualize content that does not take into account your personal interests or user profile.<br/><br/><strong>Facebook Pixel (Meta Inc.)</strong> | Usage data, Marketing tracking<br/><br/><strong>TikTok Pixel (TikTok Technology Limited)</strong> | Usage data, Marketing tracking<br/><br/><strong>Youtube.com (Google Inc.)</strong> | Usage data of embed video views<br/><br/><strong>Vimeo.com (Vimeo Inc.)</strong> | Usage data of embed video views',
                                    toggle: {
                                        value: 'targeting',
                                        enabled: false,
                                        readonly: false
                                    }
                                }, {
                                    title: 'More information',
                                    description: 'For any queries in relation to our policy on cookies and privacy, please <a class="cc-link" href="mailto:privacy@locarnofestival.ch">contact us</a>.',
                                }
                            ]
                        }
                    },
					                    'it': {
                        consent_modal: {
                            title: 'Preferenze privacy',
                            description: 'Questo sito utilizza cookie essenziali per il suo funzionamento e cookie di tracciamento per migliorare l\'esperienza. I cookie di tracciamento saranno attivati solo con il tuo consenso. Per saperne di più o per rinunciare, leggi la nostra <a href="https://www.locarnofestival.ch/LFF/extra/cookie-policy.html">Politica dei cookie</a> e l\'<a href="https://www.locarnofestival.ch/LFF/extra/privacy-policy.html">Informativa sulla privacy</a>. <br/><br/>Puoi cambiare le tue preferenze sulla privacy: <button type="button" data-cc="c-settings" class="cc-link">configura preferenze</button>',
                            primary_btn: {
                                text: 'Accetta tutto',
                                role: 'accept_all'              
                            },
                            secondary_btn: {
                                text: 'Rifiuta tutto',
                                role: 'accept_necessary'      
                            }
                        },
                        settings_modal: {
                            title: 'Preferenze sulla Privacy',
                            save_settings_btn: 'Salva impostazioni',
                            accept_all_btn: 'Accetta tutto',
                            reject_all_btn: 'Rifiuta',
                            close_btn_label: 'Chiudi',
                           
                            
                            blocks: [
                                {
                                    title: 'Utilizzo dei cookies',
                                    description: 'In questa pagina puoi modificare le tue preferenze sulla privacy e saperne di più sui fornitori con cui collaboriamo.<br/>Per ulteriori dettagli relativi ai cookie e ad altri dati sensibili, si prega di leggere l\'intero documento <a href="https://www.locarnofestival.ch/LFF/extra/privacy-policy.html" class="cc-link">Privacy Policy</a>.'
                                }, {
                                    title: 'Cookies essenziali',
                                    description: 'Questi cookies ci aiutano a rendere utilizzabile il nostro sito web, abilitano le funzioni di base e proteggono le aree del sito web. Il sito web non può funzionare correttamente senza questi fornitori.<br/><br/><strong>Locarnofestival.ch, Festival Internazionale del Film di Locarno </strong> | Login e interazione<br/><br/><strong>Youtube.com (Google Inc.)</strong> | Dati di utilizzo visualizzazione video<br/><br/><strong>Vimeo.com (Vimeo Inc.)</strong> | Dati di utilizzo visualizzazione video',
                                    toggle: {
                                        value: 'necessary',
                                        enabled: true,
                                        readonly: true         
                                    }
                                }, {
                                    title: 'Cookies di performance e analisi',
                                    description: 'I cookies di analisi ci aiutano a capire come i visitatori interagiscono con il nostro sito web raccogliendo e riportando informazioni in forma anonima.<br/>Non acconsentendo all\'utilizzo dei cookie di Performance e Analisi, alcune funzioni del sito potrebbero non funzionare correttamente.<br/><br/><strong>Google Tag Manager (Google Inc.)</strong> | Dati di utilizzo<br/><br/><strong>Google Analytics (Google Inc.)</strong> | Dati di utilizzo<br/><br/><strong>Smeetz.com (Smeetz SA)</strong> | Dati di utilizzo, acquisto biglietti',
                                    toggle: {
                                        value: 'analytics',     
                                        enabled: false,
                                        readonly: false
                                    }
                                    
                                }, {
                                    title: 'Cookies di marketing',
                                    description: 'I cookies di marketing sono utilizzati per creare profili utente o per tracciare l\'utente su questo sito web o su diversi siti web per scopi di marketing. Questi fornitori possono anche essere utilizzati per scopi pubblicitari.<br/>Non acconsentendo all\'utilizzo dei cookie di Pubblicità e Targeting, potresti visualizzare contenuti che non tengono conto dei tuoi interessi personali o del tuo profilo utente.<br/><br/><strong>Facebook Pixel (Meta Inc.)</strong> | Dati di utilizzo, Tracking di marketing<br/><br/><strong>TikTok Pixel (TikTok Technology Limited)</strong> | Dati di utilizzo, Tracking di marketing<br/><br/>',
                                    toggle: {
                                        value: 'targeting',
                                        enabled: false,
                                        readonly: false
                                    }
                                }, {
                                    title: 'Maggiori informazioni',
                                    description: 'Per ulteriori informazioni riguardo la nostra politica di Privacy e utilizzo dei cookies <a class="cc-link" href="mailto:privacy@locarnofestival.ch">contattaci</a>.',
                                }
                            ]
                        }
                    }
                }
            ,
			gui_options: {
			consent_modal: {
            layout: 'bar',               
            position: 'bottom center',    
            transition: 'slide',           
            swap_buttons: false          
        },
        settings_modal: {
            layout: 'box',                 
            transition: 'slide'           
        }
    }
			});
			
			
			//loadExtTracking()
					
			
        });



window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('consent', 'default', {
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'wait_for_update': 500,
  });
  dataLayer.push({'gtm.start': new Date().getTime(), 'event': 'gtm.js'});
  

loadGTM = function(mode){
	if (!gtmloaded) {
		localStorage.setItem("consentGranted", "true");
		function gtag() { dataLayer.push(arguments); }
		
		
		if (mode=='full') {
			gtag('consent', 'update', {
			ad_user_data: 'granted',
			ad_personalization: 'granted',
			ad_storage: 'granted',
			analytics_storage: 'granted'
		  });
		}
		
		if (mode=='adonly') {
			gtag('consent', 'update', {
			ad_user_data: 'granted',
			ad_personalization: 'granted',
			ad_storage: 'granted',
			analytics_storage: 'denied'
		  });
		}
		
		
		
		if (mode=='analytics') {
			gtag('consent', 'update', {
			ad_user_data: 'denied',
			ad_personalization: 'denied',
			ad_storage: 'denied',
			analytics_storage: 'granted'
		  });
		}
		
		 var gtmScript = document.createElement('script');
  gtmScript.async = true;
  gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-N47WHX2';

  var firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(gtmScript,firstScript);
		

	gtmloaded=true;
	}
}

loadPixels = function(){
	if (!pixelloaded) {
	!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '569570650379967');
fbq('track', 'PageView');

!function (w, d, t) {
		  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++
)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=i+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
		
		  ttq.load('CGGOB53C77UCVI790F3G');
		  ttq.page();
		}(window, document, 'ttq');
	
pixelloaded=true;
} 
}

	clearCookiesTracking = function() {
	var cookieNames = document.cookie.split(/=[^;]*(?:;\s*|$)/);

		for (var i = 0; i < cookieNames.length; i++) {
		
		if(cookieNames[i].indexOf("_tt") === 0 || cookieNames[i].indexOf("_fb") === 0) {
			document.cookie = cookieNames[i] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
		}
	
		}
		
		pixelloaded=false;
		
	}
	
	
	clearCookiesAnalytics = function() {
	var cookieNames = document.cookie.split(/=[^;]*(?:;\s*|$)/);
		for (var i = 0; i < cookieNames.length; i++) {
		
			if(cookieNames[i].indexOf("_ga") === 0 || cookieNames[i].indexOf("_gi") === 0) {
				document.cookie = cookieNames[i] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
			}
		}
		gtmloaded=true;
	}
	
	iframeEnable = function() {
	 $('.disabled-ifr').each(function() {
		$(this).attr('src',$(this).attr('data-href'));
	 })
	
	}
	
	
	loadExtTracking = function() {
		
			loadAccepted=cc.getUserPreferences().accepted_categories;
			//console.log(cc.getUserPreferences().accepted_categories)
			
			if ($('#LFF-Optin').length>0) {
				$.getScript( "https://cdn.jsdelivr.net/gh/locarno-festival/cconsent/dist/nl-optin/optinbox.new.js", function() {    
					setupOptInBox();
				})
				
			//console.log('NL Optin')
			}
			
			
			if (loadAccepted.includes('targeting')) {
						iframeEnable(); 	
						loadPixels();
						
						if (loadAccepted.includes('analytics')) {
						} else {
							loadGTM('adonly');
						}
						
					} else {
						clearCookiesTracking()
						disableIframes()
					}
					
			if (loadAccepted.includes('analytics')) {
				if (loadAccepted.includes('targeting')) {
						loadGTM('full');
				} else {
						loadGTM('analytics');
				}
				
			} else {
						clearCookiesAnalytics()
			}
		
	}	