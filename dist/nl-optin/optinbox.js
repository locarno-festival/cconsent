var getOptinShowed=optinshow=optinOver=nomoreOptin=false
var optinShowCount=0
var maxShowCount=2


	setupOptInBox=function(lid) {
	$('#listId').val(lid);
	
	$('<link href="https://cdn.jsdelivr.net/gh/locarno-festival/cconsent/dist/nl-optin/optinbox.css" rel="stylesheet"/>').appendTo('head');
	
	getOptinShowed=Cookies.get('optin-nl') 

	$('#LFF-Optin-form').hover(function() {
	optinOver=true
	}, function() {
	optinOver=false
	if($(window).scrollTop() < optInstartY && optinshow) optinFHide()
	})
	
	if (!getOptinShowed) {
	$('#LFF-Optin').addClass("d-sm-block")
	$('#signup-form').on('submit',function(e) {
	e.preventDefault;
	console.log('triggered')
	$('#signup-form').attr('action','https://locarnofestival.us19.list-manage.com/subscribe/post')
	$('#signup-form').unbind('submit')
	$('#signup-form').submit();
	Cookies.set('optin-nl', 'true', { expires: 30 })
	optinFHide()
	nomoreOptin=true
	return false;
	})

	
	optInstartY=window.innerHeight - parseInt(window.innerHeight/4)
	optInMaxY=parseInt($('footer').offset().top+100)
	actScrolling=window.innerHeight + window.scrollY;
	
	
	if($(window).scrollTop() >= optInstartY && actScrolling < optInMaxY && !optinshow) {
	optinFShow()
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
			optinFHide()
			
			if (actScrolling >= optInMaxY) nomoreOptin=true
			
	  }
  }
}); 
		}
	}
	
	optinRemove=function() {
	nomoreOptin=true
	optinFHide()
	Cookies.set('optin-nl', 'true', { expires: 2 })
	}
	
	optinFShow=function() {
	optinshow=true;

	if(optinShowCount<maxShowCount) {
	$("#LFF-Optin-form").delay(200).show('slide',{
        direction : 'right' }, function() {
			$(".subscribe-form").delay(200).fadeIn(300)
			})
	optinShowCount++;
	} else {
	nomoreOptin=true
	}
	}
	
	optinFHide=function() {
	optinshow=false;
	$(".subscribe-form").fadeOut(200)
	$("#LFF-Optin-form").delay(100).hide('slide',{
        direction : 'right' }, function() {
			
			})
	}

