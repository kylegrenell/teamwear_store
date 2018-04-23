import $ from 'jquery';

$(document).ready(function(){
  var instafeed = $('#instafeed');
  $.ajax({    
    url: 'https://api.instagram.com/v1/users/3322396718/media/recent/?access_token=3322396718.a817486.ad1ad8469ed0449393089995d0fa2cb8',
    method: 'GET',
    success: function(e){   
      $(instafeed).append("<div class='bkgrd-main__text-content'><p class='instagram-follow'>Follow: <a href='https://www.instagram.com/squintclothing' target='_blank'>@squintclothing</a></p></div><div class='instafeed-wrapper'></div>");
        for (var i = 0; i <= 5; i++) {
          $('.instafeed-wrapper').append("<img src='" + e.data[i].images.standard_resolution.url + "'</img>");
        }
    }
  });
});