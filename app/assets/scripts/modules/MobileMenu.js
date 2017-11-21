import $ from 'jquery';

class MobileMenu {
  constructor(){
    // $('.header__menu-icon').click(function(){
    //   console.log('testing click event');
    // });
    this.menuIcon = $(".header__menu-icon");
    this.menuContent = $(".header__menu-content");
    this.events();
  }

  events(){
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu(){
    this.menuContent.toggleClass("header__menu-content--is-visible");
    // no . required for passing the modifier class
  }

}

export default MobileMenu;