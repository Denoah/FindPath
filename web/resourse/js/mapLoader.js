var myMap;

ymaps.ready(init);

function init () {

    ymaps.modules.require([
        'MultiRouteCustomView'
    ], function (MultiRouteCustomView) {
        // Создаем экземпляр текстового отображения модели мультимаршрута.
        // см. файл custom_view.js
        new MultiRouteCustomView(multiRouteModel);
    });

    myMap = new ymaps.Map('map', {
        center: [53.1945,45.0195], // Москва
        zoom: 10
    });

    mySearchControl1 = new ymaps.control.SearchControl({
        options: {
            noPlacemark: true
        }
    });


}

function setHeight(freeHeight) {
    var mapElement = document.getElementById('map');
    mapElement.style.height = ($(document).height() - freeHeight) + "px";

}