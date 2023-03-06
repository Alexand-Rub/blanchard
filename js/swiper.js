document.addEventListener("DOMContentLoaded", () => {
    var swiper = new Swiper(".galary__swiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
    });

    var swiper = new Swiper(".event__swiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });

    var swiper = new Swiper(".projects__swiper", {
      spaceBetween: 50,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
    });
})

