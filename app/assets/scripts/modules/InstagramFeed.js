import $ from 'jquery';

$(document).ready(function(){
  var instafeed = $('#instafeed');

  $.ajax({    
    url: 'https://api.instagram.com/v1/users/3322396718/media/recent/?access_token=3322396718.a817486.ad1ad8469ed0449393089995d0fa2cb8',
    method: 'GET',
    success: function(e){   
      console.log(e);
      instafeed.html('<div class="instafeed-wrapper"><img src="' + e.data[0].images.standard_resolution.url +'" />' + '<img src="' + e.data[1].images.standard_resolution.url +'" />' + '<img src="' + e.data[2].images.standard_resolution.url +'" />' + '<img src="' + e.data[3].images.standard_resolution.url +'" />' + '<img src="' + e.data[4].images.standard_resolution.url +'" />' + '<img src="' + e.data[5].images.standard_resolution.url +'" /></div>');  
    }
  });

});