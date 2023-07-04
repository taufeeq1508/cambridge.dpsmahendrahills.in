$(window).on("scroll", function() {
    if($(window).scrollTop() > 150) {
        $(".header").addClass("active");
        $("#nav1").addClass("nav1change");
        $("#nav2").addClass("nav2change");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header").removeClass("active");
       $("#nav1").removeClass("nav1change");
       $("#nav2").removeClass("nav2change");
    }

    // var path = $("#nav1").innerHtml = window.location.pathname;
    // console.log(path);
    // if (path = "/gallary"){
    //     $("#nav1").addClass("nav1changetoblaack");
    //     console.log(path);
    // }
});