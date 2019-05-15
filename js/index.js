//  slick Slider
$(".header__slider").slick({
  mobileFirst: true,
  dots: true,
  infinite: true,
  adaptiveHeight: true,
  speed: 800,
  fade: true,
  draggable: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  cssEase: "ease",
  pauseOnDotsHover: true
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href="#tour-section"]')
  .not('[href="#popup"]')
  .not('[id="#popup"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

//navigation background appear
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.querySelector(".Navbar").classList.add("Navbar-scroll");
    document
      .querySelector(".Navbar__item-brand")
      .classList.add("Navbar__item-brand-scroll");
  } else {
    document.querySelector(".Navbar").classList.remove("Navbar-scroll");
    document
      .querySelector(".Navbar__item-brand")
      .classList.remove("Navbar__item-brand-scroll");
  }
}

$("#year").text(new Date().getFullYear());
