// Toggle filters display
$('.toggle-filters').on('click', function() {
    if ($('.toggle-filters').html() == "Show Filters") {
        $('.toggle-filters').html("Hide Filters");
        $('.filters').css("display", "flex");
    } else {
        $('.toggle-filters').html("Show Filters");
        $('.filters').css("display", "none");
    }
});

$('.filters a').on('click', function(e) {
    // Underline currently selected
    $('.selected').removeClass("selected");
    $(e.target).addClass("selected");
    
    // Filter records
    switch($('.selected').html()) {
        case "All":
            $('.record').css('display', 'block');
            break;
        case "Albums":
            $('.record').css('display', 'block');
            $('.record:not(.album)').css('display', 'none');
            break;
        case "Singles":
            $('.record').css('display', 'block');
            $('.record:not(.single)').css('display', 'none');
            break;
        case "Vinyl":
            $('.record').css('display', 'block');
            $('.record:not(.vinyl)').css('display', 'none');
    }
});

