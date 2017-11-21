import $ from 'jquery';

class MainLogo {
  constructor(){
    this.mainLogo = $(".bkgrd-main__title");
    this.mainDiv2 = $('.bkgrd-main-2');
    this.events();
  }

  events(){
    // this.menuIcon.scroll();
    $(window).scroll(function() {

        if ($(this).scrollTop()>0)
         {
            $(this.mainLogo).fadeOut();
         }
        else
         {
          $(this.mainLogo).fadeIn();
         }
     });
  }

  // toggleTheMenu(){
  //   this.mainDiv2.toggleClass("bkgrd-main__title--is-visible");
  // }

}

export default MainLogo;