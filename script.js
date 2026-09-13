// Navbar reacts to scroll: compresses and darkens slightly once the
// page has scrolled past the hero's top padding. This is the single
// deliberate motion moment on the page — everything else stays still.
const tvNavbar = document.querySelector('.tv-navbar');

function handleNavScroll() {
  if (window.scrollY > 40) {
    tvNavbar.classList.add('tv-navbar--scrolled');
  } else {
    tvNavbar.classList.remove('tv-navbar--scrolled');
  }
}

window.addEventListener('scroll', handleNavScroll);
handleNavScroll();