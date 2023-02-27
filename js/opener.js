document.addEventListener("DOMContentLoaded", () => {
    // Открытие поиска
    document.querySelectorAll('.search__opener').forEach(function(item) {
        item.addEventListener('click', function () {
            document.querySelector('.search').classList.toggle('search_open')
        });
    });

    // Открытие меню
    document.querySelectorAll('.nav-opener').forEach(function(item) {
        item.addEventListener('click', function () {
            document.querySelector('.nav').classList.toggle('nav_open')
        });
    });

    // Открытие карточек галереи
    document.querySelectorAll('.galaru__clouse').forEach(function(item) {
        item.addEventListener('click', function () {
            document.querySelectorAll('.galary__card').forEach(function(item) {
                item.classList.remove('galary__card_open')
            })
        });
    });
    document.querySelectorAll('.galary__slide').forEach(function(item) {
        item.addEventListener('click', function () {
            cardID = 'galary-card-' + item.id.slice(-1)
            document.getElementById(cardID).classList.add('galary__card_open')
        });
    });
  });
  