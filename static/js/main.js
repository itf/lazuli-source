  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  
  ga('create', 'UA-80847986-1', 'auto');
  ga('send', 'pageview');

  var runned = false; 
  $( window ).scroll( function() { 
  if ( $( document ).scrollTop() >= 350 && runned == false ) { 
  ga('send', 'event', { eventCategory: 'Scrolled 350px', eventAction: 'Scroll' }); 
  runned = true; 
  } 
  });

baguetteBox.run('.gallery-photo',{
	buttons: true
});

var previoushash = "";

$('div.modal').on('show.bs.modal', function() {
    var modal = this;
    var modalID = modal.id;
    var windowhash = window.location.hash;
    if (windowhash.indexOf(modalID) == -1){
         window.location.hash = modalID;
    }
    window.onhashchange = function() {
	    var windowhash = window.location.hash;
    }
});

$('div.modal').on('hide.bs.modal', function() {
    var modalID = this.id;
    var windowhash = window.location.hash;
    if(windowhash.indexOf(modalID) != -1) {
        windowhash=windowhash.replace(modalID,"");
        history.pushState('', document.title, window.location.pathname+windowhash);
    }
});

$('div.modal').on('hidden.bs.modal', function() {
    $('div.modal').each(function(){
         if(($(this).data('bs.modal') || {}).isShown){
	    document.body.className += " modal-open";
		setTimeout(function(){
        	$(this).find(".modal-content").focus();
       	}, 200);
	 }
     });
	var windowhash = window.location.hash;
	ga('set', 'page',windowhash);
	ga('send', 'pageview', windowhash );
});


$(document).ready(function() {
    $('div.modal').each(function(){
	    var modal = this;
	    var modalID = modal.id;
	    var windowhash = window.location.hash;
	    if(windowhash.indexOf(modalID) != -1) {
	        $(this).modal('show');
	    }
    });
});

$(window).on('hashchange', function() {
	var windowhash = window.location.hash;
	$('div.modal').each(function(){
        var modal = this;
	    var modalID = modal.id;
	    if(windowhash.indexOf(modalID) != -1) {
		document.body.className += " modal-open";
	    	if(!($(this).data('bs.modal') || {}).isShown){
	            $(this).modal('show');
	        }
	    }
	    if (windowhash.indexOf(modalID) == -1){
	        $(modal).modal('hide');
	    }
    });
});

$('div.modal').on('show.bs.modal', function() {
	modal=this;
        setTimeout(function(){
           $(modal).find(".modal-content").focus();
        }, 200);
	var windowhash = window.location.hash;
	ga('set', 'page',windowhash);
	ga('send', 'pageview', windowhash );
});


function appendHash(hash) {
     var windowhash = window.location.hash;
    if(windowhash.indexOf(hash) == -1) {
        windowhash=windowhash.concat(hash);
        history.pushState('', document.title, window.location.pathname+windowhash);
    }
}

(function manualToolTip() {
        var flag = false;
        $('.tooltip-ne').click(function (e) {
          (tlite.show(e.target, { grav: 'ne' }));
        });
        $('.tooltip-nw').click(function (e) {
          (tlite.show(e.target, { grav: 'nw' }));
        });
        $('.tooltip-n').click(function (e) {
          (tlite.show(e.target, { grav: 'n' }));
        });

      // Helper method for handling classes
      function classWhen(el) {
        var classes = (el.className || '').split(' ');
        return function (cssClass, opts) {
          return ~classes.indexOf(cssClass) && opts;
        }
      }

      tlite(function (el) {
        var when = classWhen(el);
        return when('tooltip', { grav: 's' }) ||
          when('tooltip-n', { grav: 'n' }) ||
          when('tooltip-s', { grav: 's' }) ||
          when('tooltip-w', { grav: 'w' }) ||
          when('tooltip-e', { grav: 'e' }) ||
          when('tooltip-se', { grav: 'se' }) ||
          when('tooltip-ne', { grav: 'ne' }) ||
          when('tooltip-sw', { grav: 'sw' }) ||
          when('tooltip-nw', { grav: 'nw' })
      });

}());

sorttable.sort_alpha = function(a,b) { return a[0].localeCompare(b[0]); }

ga('require', 'linkid');

setTimeout("ga('send', 'event', { eventCategory: '60 seconds on page', eventAction: 'Read' })", 60000);
  

