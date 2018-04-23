import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import HideOnScroll from './modules/HideOnScroll';
import $ from 'jquery';
import Instagram from './modules/InstagramFeed';
import LoadModal from './modules/LoadModal';
import Year from './modules/Year';
import CustomTilt from './modules/CustomTilt';
import ConsoleMessages from './modules/ConsoleMessages';
import BackToTop from './modules/BackToTop';

var mobileMenu = new MobileMenu();

// new RevealOnScroll($(".footer-wrapper"), "85%");
new RevealOnScroll($(".squint-logo-image"), "90%");
new HideOnScroll($(".bkgrd-main__title"), "100%");
new HideOnScroll($(".btn-shop-now"), "100%");