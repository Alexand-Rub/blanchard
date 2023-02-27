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
            var cardID = 'galary-card-' + item.id.slice(-1)
            document.getElementById(cardID).classList.add('galary__card_open')
        });
    });

    // Аккардион
    document.querySelectorAll('.period__yers').forEach(function(item) {
        item.addEventListener('click', function () {
            if (item.parentElement.classList.contains('period__item_open')) {
                item.parentElement.classList.remove('period__item_open')    
            } else {
                document.querySelectorAll('.period__item').forEach(function(item) {
                    item.classList.remove('period__item_open')
                })
                item.parentElement.classList.add('period__item_open')
            }
        });
    });

    document.querySelectorAll('.person-btn').forEach(function(item) {
        item.addEventListener('click', function () {
            document.querySelectorAll('.bio__card').forEach(function(item) {
                item.classList.remove('bio__card_open')
            })
            var bioID = item.id.slice(-1);
            if (bioID) {
                bioID = 'bio-card-' + bioID
                document.getElementById(bioID).classList.add('bio__card_open')
            } else {
                document.getElementById('bio-card-none').classList.add('bio__card_open')
            }
        });
    });


  });
  