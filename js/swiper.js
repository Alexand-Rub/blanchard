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
})

