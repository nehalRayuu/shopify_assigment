class CustomCardGallery extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.initFlickity();
    }
  
    initFlickity() {
      // Initialize Flickity on the carousel element
      var flkty = new Flickity(this.querySelector('.product_card_carousel'), {
          wrapAround: true,
          autoPlay: true,
          pageDots: true
      });
    }
  }
  
  // Define the custom element
  customElements.define('custom-card-gallery', CustomCardGallery);
  