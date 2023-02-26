document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.search__opener').forEach(function(item) {
        item.addEventListener('click', function () {
            document.querySelector('.search').classList.toggle('search_open')
        });
    });
    document.querySelectorAll('.nav-opener').forEach(function(item) {
        item.addEventListener('click', function () {
            document.querySelector('.nav').classList.toggle('nav_open')
        });
    });
  });
  