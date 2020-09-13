(() => {
  const { PerfectScrollbar, ScrollReveal } = window;

  const sr = ScrollReveal();

  const $scrollTop = $('#js-scroll-top');
  const $topElement = $('#js-top-element');

  $(window).scroll(function () {
    const $this = $(this);
    if ($this.scrollTop() > 800) {
      $scrollTop.fadeIn();
    } else {
      $scrollTop.fadeOut();
    }
  });

  $scrollTop.click(() => {
    $('html, body').animate(
      {
        scrollTop: $topElement.offset().top,
      },
      500
    );
  });

  const revealElementsOnScroll = () => {
    sr.reveal('.js-reveal', {
      duration: 1000,
      delay: 300,
    });
  };

  revealElementsOnScroll();
  // document.addEventListener('DOMContentLoaded', (event) => {
  //   document.querySelectorAll('pre code').forEach((block) => {
  //     hljs.highlightBlock(block);
  //   });
  // });

  let buttonCheck = document
    .getElementsByClassName('post')[0]
    .getElementsByTagName('a');
  for (let i = 0; i < buttonCheck.length; i++) {
    let content = Array.from(buttonCheck[i].textContent);
    if (content[0] == '/' && content[1] == '/') {
      buttonCheck[i].classList.add('button', 'medium');
      buttonCheck[i].parentElement.classList.add('small-button');
      content.slice(0, 2);
      let s = '';
      for (let j = 2; j < content.length; j++) {
        s += content[j].toString();
      }
      buttonCheck[i].innerText = s;
      content.slice(0, content.length - 1);
      var new_row = document.createElement('i');
      new_row.className = 'fas fa-arrow-alt-circle-down';
      buttonCheck[i].appendChild(new_row);
    }
  }


window.fbAsyncInit = function() {
  FB.init({
    appId      : '325462015393237',
    cookie     : true,
    xfbml      : true,
    version    : 'v8.0'
  });
    
  FB.AppEvents.logPageView();   
    
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

 FB.AppEvents.logPageView();
})();
