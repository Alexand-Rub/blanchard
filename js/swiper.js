document.addEventListener("DOMContentLoaded", () => {
    var swiper = new Swiper(".galary__swiper", {
        spaceBetween: 38,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,

        breakpoints: {
          // when window width is >= 320px
          768: {
            slidesPerGroup: 2,
            slidesPerView: 2,
          },
        }
    });

    var swiper = new Swiper(".event__swiper", {
      spaceBetween: 32,
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        // when window width is >= 320px
        768: {
          slidesPerGroup: 2,
          slidesPerView: 2,
        },
      }
    });

    var swiper = new Swiper(".projects__swiper", {
      spaceBetween: 34,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        // when window width is >= 320px
        768: {
          slidesPerGroup: 2,
          slidesPerView: 2,
        },
      }
    });
})

