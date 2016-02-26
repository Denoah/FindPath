var items;

$(function() {
    $.ajax({
        method: "GET",
        url: "/sql/go",
        async: false,
        success: function(result) {
            items = result.split(";");
            console.log(items);
        }
    });

    $( "#input" ).autocomplete({
        source: items,
        autoFocus: true
    });

});

function taf() {
    document.getElementById()
}


