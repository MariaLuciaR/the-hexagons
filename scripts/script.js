
$(".filter").on("click", function(event) {
    if ($(event.target).html() == "Albums") {
        $(".record").css("display", "block");
        $(".record:not(.album)").css("display", "none");
    } else if ($(event.target).html() == "Singles"){
        $(".record").css("display", "block");
        $(".record:not(.single)").css("display", "none");
    } else if ($(event.target).html() == "Vinyl") {
        $(".record").css("display", "block");
        $(".record:not(.vinyl)").css("display", "none");
    } else {
        $(".record").css("display", "block");
    }
});