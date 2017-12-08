import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import Instafeed from 'instafeed';
import LoadModal from './modules/LoadModal';

var mobileMenu = new MobileMenu();
// var revealOnScroll = new RevealOnScroll();
new RevealOnScroll($(".footer-wrapper"), "85%");
new RevealOnScroll($(".squint-logo-image"), "90%");

var userFeed = new Instafeed({
  get: 'user',
  userId: '3322396718',
  clientId: 'a8174865bc804521b7b8cf547bbabb48',
  accessToken: '3322396718.a817486.ad1ad8469ed0449393089995d0fa2cb8',
  resolution: 'standard_resolution',
  template: '<div class="col-lg-3 col-sm-3 col-xs-4"><a href="{{link}}"><img class="img-responsive" src="{{image}}" /></a></div>',
  sortBy: 'most-recent',
  limit: 8,
  links: true
});

userFeed.run();

console.log("%c Psst, if you're seeing this, check back from time to time for secret discounts... This is our 'Easter Egg' section :)", "background: #ffc6df; color: #9c8ac1");