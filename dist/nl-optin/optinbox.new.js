var getOptinShowed=optinshow=optinOver=nomoreOptin=false
var optinShowCount=0
var maxShowCount=2
var optinmobile=false;
var listid="9ced898a81";

	setupOptInBox=function() {
	
	formObj= $('#signup-form-en');
	
	$('#fLang').val(document.documentElement.lang);
	
	if (document.documentElement.lang=='it') 
	{
		listid="447feadeb6";
		formObj= $('#signup-form-it');
		$('.subscribe-form h6.it, #signup-form-it').removeClass('d-none');
		$('.subscribe-form h6.en, #signup-form-en').addClass('d-none');
		
	}
		
	
	$('#listId').val(listid);
	
	if (window.innerWidth<=576) optinmobile=true;
	
	$('<link href="https://cdn.jsdelivr.net/gh/locarno-festival/cconsent/dist/nl-optin/optinbox.new.css" rel="stylesheet"/>').appendTo('head');
	
	getOptinShowed=Cookies.get('optin-nl-24') 
	

	
	$('#LFF-Optin-form').hover(function() {
	optinOver=true
	}, function() {
	optinOver=false
	})
	
	
	//getOptinShowed = false;
	
	if (!getOptinShowed) {
		
	$('#LFF-Optin').addClass("d-block");
	
	formObj.on('submit',function(e) {
		e.preventDefault;
		formObj.attr('action','https://locarnofestival.us19.list-manage.com/subscribe/post')
		formObj.unbind('submit')
		formObj.submit();
		Cookies.set('optin-nl-24', 'true', { expires: 60 })
		optinFHide()
		nomoreOptin=true
		return false;
	})

		
	optInstartY=window.innerHeight - parseInt(window.innerHeight/4)
	optInMaxY=parseInt($('footer').offset().top+100);
	
	optInstartY=0;
	optInMaxY=parseInt(window.innerHeight+50);
	
	
	
	actScrolling=window.innerHeight + window.scrollY;

	if (optinmobile) {
		optInstartY=0;
		maxShowCount=1;
	}
	
		console.log(optInstartY,optInMaxY,actScrolling,optinshow);
	
	if(!optinshow) {
		optinFShow();
		
	}
	
	
	
		}
	}
	
	optinRemove=function() {
		nomoreOptin=true
		optinFHide()
		Cookies.set('optin-nl-24', 'true', { expires: 4 })
		$('.newsletter-bg').css('display','none');
	}
	
	optinFShow=function() {
	optinshow=true;
	
	//if(optinShowCount<maxShowCount) {
		
	if (optinmobile) {
		$('.newsletter-bg').css('display','block'); 	
		$('body,html').addClass('overflow-hidden');
		$('.newsletter-bg').on('click',function() {
			optinFHide()
		});
	}
	
	//console.log('nl 24 show');
	$('#LFF-Optin-form').css('display','block');
	
	optinShowCount++;
	//} else {
	//nomoreOptin=true
	//}
	}
	
	optinFHide=function() {
		optinshow=false;
		$('.newsletter-bg').css('display','none');
			if (optinmobile) {
				$('body,html').removeClass('overflow-hidden');
			}
		$(".subscribe-form").fadeOut(200);
			$("#LFF-Optin-form").delay(100).hide()
	}