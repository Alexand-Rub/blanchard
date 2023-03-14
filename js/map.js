document.addEventListener("DOMContentLoaded", () => {
    var myMap;
    ymaps.ready(init);
    
    function init () {
        myMap = new ymaps.Map('map', {
            center: [55.759385, 37.615345],
            zoom: 13,
            controls: []
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/map-point.svg',
            // Размеры метки.
            iconImageSize: [20, 20],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });
        myMap.geoObjects.add(myPlacemark)
    }
})