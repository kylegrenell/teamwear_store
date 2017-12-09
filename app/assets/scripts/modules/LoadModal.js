import $ from 'jquery';

function loadModal(){

  $(document).ready(function(){ 
    if(sessionStorage["PopupShown"] != 'yes'){ 
      $(".cover").fadeIn('medium');
      $(".popup").fadeIn('slow');
    } else {
    // do nothing
  };
});

  $(".popup").on('click', function(){
    if($(event.target).is("#close")){
      $(".cover").fadeOut('slow');
      $(".popup").fadeOut('medium');
      sessionStorage["PopupShown"] = 'yes';
    }
  });

  $(document).on("click touchstart",function(e) {
      var container = $(".popup");
      var cover = $(".cover");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
          container.fadeOut('medium');
          cover.fadeOut('slow');
          sessionStorage["PopupShown"] = 'yes';
      }
  });                                

};

window.onload = function(){
  loadModal();
};