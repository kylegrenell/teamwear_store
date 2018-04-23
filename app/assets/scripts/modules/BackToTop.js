import $ from 'jquery';

  $("button").click(function() {
      $('html, body').animate({
          scrollTop: $("#products").offset().top
      }, 1000);
  });

  $(".back-to-top").click(function() {
      $('html, body').animate({
          scrollTop: $("#top-nav").offset().top
      }, 1000);
  });

