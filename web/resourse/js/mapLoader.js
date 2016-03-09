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
    addParametrs();

}

function setParametr(elementID, parametr) {
    var element = document.getElementById(elementID);
    element.value = parametr;
}

function addParametrs() {
    setParametr('row1-sity-text', sity1Name);
    setParametr('row1-street-text', street1Name);
    setParametr('row1-house-text', house1Name);
    setParametr('row2-sity-text', sity2Name);
    setParametr('row2-street-text', street2Name);
    setParametr('row2-house-text', house2Name);
    setParametr('row3-sity-text', sity3Name);
    setParametr('row3-street-text', street3Name);
    setParametr('row3-house-text', house3Name);
    setParametr('row4-sity-text', sity4Name);
    setParametr('row4-street-text', street4Name);
    setParametr('row4-house-text', house4Name);
    setParametr('row5-sity-text', sity5Name);
    setParametr('row5-street-text', street5Name);
    setParametr('row5-house-text', house5Name);
    setParametr('row6-sity-text', sity6Name);
    setParametr('row6-street-text', street6Name);
    setParametr('row6-house-text', house6Name);
    setParametr('price', defaultPrice);
    setParametr('posadka', posadka);
    setParametr('prostoi', prostoi);
    setParametr('prostoiPrice', prostoiPrice);
    setParametr('countStop', countStop);
    setParametr('stopPrice', stopPrice);
    setParametr('bufferText', bufferText);
}