var getOptinShowed=optinshow=optinOver=nomoreOptin=false
var optinShowCount=0
var maxShowCount=2
var optinmobile=false;
var listid="9ced898a81";

	setupOptInBox=function() {
	
	$('#fLang').val(document.documentElement.lang);
	
	if (document.documentElement.lang=='it') listid="447feadeb6";
	
	//console.log(listid,document.documentElement.lang);
	$('#listId').val(listid);
	
	if (window.innerWidth<=576) optinmobile=true;
	
	//$('<link href="https://cdn.jsdelivr.net/gh/locarno-festival/cconsent/dist/nl-optin/optinbox.css" rel="stylesheet"/>').appendTo('head');
	
	getOptinShowed=Cookies.get('optin-nl') 
	

	
	$('#LFF-Optin-form').hover(function() {
	optinOver=true
	}, function() {
	optinOver=false
	if($(window).scrollTop() < optInstartY && optinshow) optinFHide()
	})
	
	if (!getOptinShowed) {
		
	$('#LFF-Optin').addClass("d-block");
	
	$('#signup-form').on('submit',function(e) {
		e.preventDefault;
		//console.log('triggered')
		$('#signup-form').attr('action','https://locarnofestival.us19.list-manage.com/subscribe/post')
		$('#signup-form').unbind('submit')
		$('#signup-form').submit();
		Cookies.set('optin-nl', 'true', { expires: 60 })
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
	
	console.log(optInstartY,optInMaxY,actScrolling);
	
	if($(window).scrollTop() >= optInstartY && actScrolling < optInMaxY && !optinshow) {
		optinFShow();
		console.log('nl show')
	}
	
	var prevscrollVal=actScrolling;
	
	$(window).scroll(function() {
		if (!optinOver && !nomoreOptin) {
		
		let actScrolling=window.innerHeight + window.scrollY;
		let scrollUp=false;
		
		if (actScrolling<prevscrollVal) scrollUp=true
		prevscrollVal=actScrolling
		
		if(!scrollUp && $(window).scrollTop() >= optInstartY && actScrolling < optInMaxY && !optinshow) {
			optinFShow()
			
		}
	  
	  
		  if(($(window).scrollTop() < optInstartY && optinshow) || ((actScrolling >= optInMaxY) && optinshow)) {
				//optinFHide()
				
				//if (actScrolling >= optInMaxY) nomoreOptin=true
				
		  }
	  }
}); 
		}
	}
	
	optinRemove=function() {
		nomoreOptin=true
		optinFHide()
		Cookies.set('optin-nl', 'true', { expires: 4 })
		$('.newsletter-bg').css('display','none');
	}
	
	optinFShow=function() {
	optinshow=true;

	if(optinShowCount<maxShowCount) {
		
	if (optinmobile) {
		$('.newsletter-bg').css('display','block'); 	
		$('body,html').addClass('overflow-hidden');
		$('.newsletter-bg').on('click',function() {
			optinFHide()
		});
	}
	
	$("#LFF-Optin-form").delay(200).show();
	$(".subscribe-form").delay(400).fadeIn(100);
	//$("#LFF-Optin-form").delay(200).show('slide',{
    //    direction : 'right' }, function() {
		//	$(".subscribe-form").delay(200).fadeIn(300)
			//})
	optinShowCount++;
	} else {
	nomoreOptin=true
	}
	}
	
	optinFHide=function() {
		optinshow=false;
		$('.newsletter-bg').css('display','none');
			if (optinmobile) {
				$('body,html').removeClass('overflow-hidden');
			}
		$(".subscribe-form").fadeOut(200);
			$("#LFF-Optin-form").delay(100).hide('slide',{
				direction : 'right' }, function() {
			})
	}

