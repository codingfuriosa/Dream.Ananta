/* Call tracking: an ad URL can carry ?contactid=<10-digit number>, the tracked number for that campaign.
   That number then replaces every call button on the site for the rest of the visit, on both pages.
   Without contactid the numbers written in the HTML are used as they are. */
(function(){
 'use strict';
 var key='ananta_call',digits=(new URLSearchParams(location.search).get('contactid')||'').replace(/\D/g,'');
 if(digits.length===12&&digits.indexOf('91')===0)digits=digits.slice(2);
 if(/^[6-9]\d{9}$/.test(digits)){try{sessionStorage.setItem(key,digits);}catch(e){}}
 else{digits='';try{digits=sessionStorage.getItem(key)||'';}catch(e){}}
 if(!digits)return;
 var tel='+91'+digits,label='+91 '+digits.slice(0,5)+' '+digits.slice(5);
 window.ANANTA_CALL={tel:tel,label:label};
 function apply(){
  document.querySelectorAll('a[href^="tel:"]').forEach(function(a){
   a.href='tel:'+tel;a.setAttribute('aria-label','Call '+label);
   // thank-you.html swaps in its own mobile number from these; the tracked number wins on every screen.
   a.removeAttribute('data-tel-mobile');a.removeAttribute('data-tel-mobile-label');
   var span=a.querySelector('span');if(span&&/^\+?[\d\s]+$/.test(span.textContent.trim()))span.textContent=label;
  });
 }
 apply();
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply);
})();
