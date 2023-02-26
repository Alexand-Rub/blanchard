document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.btn-reset').forEach(function(item) {
    item.addEventListener('click', function () {
      console.log('click');
      document.querySelector('.menu').classList.toggle('menu--open')
      let tl = gsap.timeline()
      tl.from('.menu__top', { y: -50, opacity: 0 })
        .from('.close', { y: -50, opacity: 0 }, "<")
        .from('.menu__container', { y: 50, opacity: 0 })
        .from('.nav__list', { y: 50, opacity: 0 })
        .from('.menu__right', { y: 50, opacity: 0 })
        .from('.social', { y: 50, opacity: 0 }, "<")
    });
  });
});
