function addSityOnLoad() {
    $.ajax({
        type: 'POST',
        url: '/sql/getSity',
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

function addSity() {
    var data = document.getElementById('sity').value;
    var act= 'act=' + data;
    $.ajax({
        type: 'POST',
        url: '/sql/getSity',
        data: act,
        success: function(text) {
            addSityOnLoad();
        }
    })
}
