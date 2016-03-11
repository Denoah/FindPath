function addSityOnLoad() {
    addOnLoad('/sql/getSity');
}

function addSity() {
    var txt="";
    txt += add('/sql/getSity');
    if (txt == "err") {
        alert("Данный город уже внесен в базу");
    } else {
        addSityOnLoad();
    }
}

function addStreetOnLoad() {
    addOnLoad("/sql/getStreet");
}

function addStreet() {
    var txt="";
    txt += add('/sql/getStreet');
    if (txt == "err") {
        alert("Данная улица уже внесена в базу");
    } else {
        addStreetOnLoad();
    }
}

function addPlaceOnLoad() {
    $.ajax({
        method: 'POST',
        url: '/sql/getPlace',
        success: function(text) {
            var html = "";
            var arr = text.split(';');
            for (var i=0; i < arr.length; i++) {
                html += "<tr><td>"+ (i+1) +"</td><td>" + arr[i].split(":")[0] + "</td><td>" + arr[i].split(":")[1] + "</td></tr>"
            }
            var element = document.getElementById("table");
            element.innerHTML = "<table class='table table-td-sity' style=\"margin:0 auto 0 0\"><thead><tr><td><b>#</b></td><td><b>Наименование</b></td><td><b>Местоположение</b></td></tr></thead>" + html + "</table>";
        }
    });
}

function addPlace() {
    var point = document.getElementById("input");
    var disc = document.getElementById("disc");
    if (point.value !== "" && disc.value !== "") {
        var data = "point=" + point.value + "&disc=" + disc.value;
        point.value = "";
        disc.value = "";
        $.ajax({
            url: '/sql/getPlace',
            method: 'POST',
            data: data,
            success: function(text) {
                if (text == "err") {
                    alert("Привязка с этим местом уже в базе");
                } else {
                    addPlaceOnLoad();
                }
            }
        })
    } else {
        alert("Что-то забыли заполнить");
    }




}

function addOnLoad(url) {
    $.ajax({
        method: 'POST',
        url: url,
        success: function(text) {
            var html = "";
            var arr = text.split(';');
            for (var i=0; i < arr.length; i++) {
                html += "<tr><td>"+ (i+1) +"</td><td>" + arr[i] + "</td></tr>"
            }
            var element = document.getElementById("table");
            element.innerHTML = "<table class='table table-td-sity' style=\"margin:0 auto 0 0\"><thead><tr><td><b>#</b></td><td><b>Наименование</b></td></tr></thead>" + html + "</table>";
        }
    })
}

function add(url) {
    var data = document.getElementById('input');
    var act= 'data=' + data.value;
    var res;
    $.ajax({
        type: 'POST',
        url: url,
        async: false,
        data: act,
        success: function(text) {
            data.value = "";
            res = text;
        }
    });
    return res;
}
