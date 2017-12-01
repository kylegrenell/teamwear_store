import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(element, offset){
    this.itemsToReveal = element;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially(){
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints(){
    var that = this;
    this.itemsToReveal.each(function(){
      
      var currentItem = this;
      
      new Waypoint({
        // dom element watching for as scroll
        element: currentItem, 
        // what want to happen when scrolled to
        handler: function(){
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: that.offsetPercentage
      });
    });
  }

}

export default RevealOnScroll;