var items;
var streets;

$(function() {
    $.ajax({
        method: "POST",
        url: "/sql/go",
        data: 'data=sity',
        async: false,
        success: function(result) {
            items = result.split(";");
            console.log(items);
        }
    });

    $.ajax({
        method: "POST",
        url: "/sql/go",
        data: 'data=street',
        async: false,
        success: function(result) {
            streets = result.split(";");
            console.log(streets);
        }
    });

    $( ".col-sity" ).autocomplete({
        source: items,
        autoFocus: true
    });

    $( ".col-street" ).autocomplete({
        source: streets,
        autoFocus: true
    });

});
