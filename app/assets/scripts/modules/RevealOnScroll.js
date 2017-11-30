import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(){
    this.itemsToReveal = $(".footer-wrapper");
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially(){
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints(){
    this.itemsToReveal.each(function(){
      var currentItem = this;
      new Waypoint({
        // dom element watching for as scroll
        element: currentItem, 
        // what want to happen when scrolled to
        handler: function(){
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: "85%"
      });
    });
  }

}

export default RevealOnScroll;