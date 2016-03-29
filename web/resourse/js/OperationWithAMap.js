var tag;
function Search(elementOfSerch) {
    var street;
    var sity;
    var house;
    console.log("search with element " + elementOfSerch);
    sity = document.getElementById('row' + elementOfSerch +'-sity-text').value;
    console.log(sity);
    console.log('row' + elementOfSerch +'-sity-text');
    street = document.getElementById('row' + elementOfSerch +'-street-text').value;

    console.log("start servlet");
    console.log("street = " + street);

    $.ajax({
        url: '/sql/getAdress',
        async: false,
        method: 'POST',
        data: "name=" + street,
        success: function(text) {
            street = text;
        }
    });

    console.log("stop servlet");
    console.log("street = " + street);

    house = document.getElementById('row' + elementOfSerch +'-house-text').value;
    tag = sity + ", Пензенская область, " + street + " " + house;
    console.log("tag: " + tag);

    ymaps.geocode(tag, {
        result: 1
    }).then(function(res) {
        var firstGeoObject = res.geoObjects.get(0);
        var bounds = firstGeoObject.properties.get('boundedBy');
        myMap.geoObjects.add(firstGeoObject);
        myMap.setBounds(bounds, {
            checkZoomRange: true // проверяем наличие тайлов на данном масштабе.
        });
    });
}

function CleareAllTags() {
    myMap.geoObjects.removeAll();
}

function CreateWay() {
    CleareAllTags();
    var mas = new Array(0);
    for (var i = 1; i < maxElementsForSearch; i++) {
        element = document.getElementById('row' + i + '-street-text');
        if (element.value != '') {
            Search(i);
            mas[mas.length] = tag;
        }
    }
    var multiRoute = new ymaps.multiRouter.MultiRoute({
        referencePoints: mas,
        params: {
            results: 4
        }
    }, {
        boundsAutoApply: true
    }
    );
    ymaps.route(mas).then(function (route) {
        myMap.geoObjects.add(multiRoute);
        console.log(route.getLength());
        document.getElementById('wayLength').value = Math.round(route.getLength() / 1000);
        getPrice();
        //console.log(result);
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });
}



function getPrice() {
    var lengthWay = document.getElementById('wayLength').value;
    var price = document.getElementById('price').value;
    var result = document.getElementById('result');
    var checkbox = document.getElementById('checkboxParameters');
    var outputElement = document.getElementById('output');
    if (checkbox.checked) {
        var posadka = document.getElementById('posadka').value;
        var prostoi = document.getElementById('prostoi').value;
        var prostoiPrice = document.getElementById('prostoiPrice').value;
        var countStop = document.getElementById('countStop').value;
        var stopPrice = document.getElementById('stopPrice').value;
        result.value = parseInt(lengthWay, 10) * parseInt(price, 10) + parseInt(posadka, 10) +
            (parseInt(prostoi, 10) * parseInt(prostoiPrice, 10)) + (parseInt(countStop, 10) * parseInt(stopPrice, 10));
        outputElement.innerHTML = textPrice + "<b>" + result.value + textCurrency + "</b><br>" + textPrice2 +
            price + textLength + "<br><b>" + "C учетом дополнительных параметров" + "</b>";
    } else {
        result.value = parseInt(lengthWay, 10) * parseInt(price, 10);
        outputElement.innerHTML = textPrice + "<b>" + result.value + textCurrency + "</b><br>" + textPrice2 +
            price + textLength;
    }



}

function setBuffer() {
    var text = document.querySelector('.bufferText');
    var range = document.createRange();
    range.selectNode(text);
    window.getSelection().addRange(range);

    try {
        var successfull = document.execCommand('copy');
        var msg = successfull ? 'ok' : 'fail';
        console.log(msg);
    } catch (err) {
        console.log('fail');
    }

    window.getSelection().removeAllRanges();
}


