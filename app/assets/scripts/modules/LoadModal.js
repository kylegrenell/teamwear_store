function loadModal(){

  $(document).ready(function(){  
    $(".cover").fadeIn('medium');
    $(".popup").fadeIn('slow');
  });

  $(".popup").on('click', function(){
    if($(event.target).is("#close")){
      $(".cover").fadeOut('slow');
      $(".popup").fadeOut('medium');
    }
  });

  $(document).on("click touchstart",function(e) {
      var container = $(".popup");
      var cover = $(".cover")
      if (!container.is(e.target) && container.has(e.target).length === 0) {
          container.fadeOut('medium');
          cover.fadeOut('slow');
      }
  });                                   

};

window.onload = function(){
  loadModal();
};