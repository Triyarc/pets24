(function () {
  "use strict";

  // Sticky Navbar

  document.addEventListener("DOMContentLoaded", function () {
  
    // Mean Menu (example with a simple toggle function, customize as needed)
    var meanMenu = document.querySelector(".mean-menu");
    var meanScreenWidth = 1199;
    function toggleMeanMenu() {
      if (window.innerWidth <= meanScreenWidth) {
        meanMenu.classList.toggle("active");
      }
    }
    window.addEventListener("resize", toggleMeanMenu);
    toggleMeanMenu();

    // Responsive Options Menu
    var dotMenu = document.querySelector(
      ".others-option-for-responsive .dot-menu"
    );
    var container = document.querySelector(
      ".others-option-for-responsive .container .container"
    );
    // dotMenu.addEventListener("click", function () {
    //   container.classList.toggle("active");
    // });

    // Search Overlay
    var searchBox = document.querySelector(".others-options .search-box");
    var searchOverlay = document.querySelector(".search-overlay");
    var searchOverlayClose = document.querySelector(".search-overlay-close");

    // searchBox.addEventListener("click", function () {
    //   searchOverlay.classList.toggle("search-overlay-active");
    // });

    // searchOverlayClose.addEventListener("click", function () {
    //   searchOverlay.classList.remove("search-overlay-active");
    // });

    // Counter
    // var counters = document.querySelectorAll('.counter');
    // counters.forEach(function(counter) {
    //     counter.innerHTML = '0';
    //     var updateCounter = function() {
    //         var target = +counter.getAttribute('data-target');
    //         var c = +counter.innerText;
    //         var increment = target / 200;
    //         if (c < target) {
    //             counter.innerText = `${Math.ceil(c + increment)}`;
    //             setTimeout(updateCounter, 1);
    //         } else {
    //             counter.innerText = target;
    //         }
    //     };
    //     updateCounter();
    // });

    // Preloader
    

    // noUiSlider (assuming noUiSlider is included in your project)
    if (typeof noUiSlider === "object") {
      var priceSlider = document.getElementById("price-slider");
      if (priceSlider) {
        noUiSlider.create(priceSlider, {
          start: [0, 750],
          connect: true,
          step: 50,
          margin: 200,
          range: {
            min: 0,
            max: 1000,
          },
          tooltips: true,
          format: wNumb({
            decimals: 0,
            prefix: "$",
          }),
        });
      }
    }
  });
})();
