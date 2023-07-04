$(document).ready(function () {
    $("a.pop").click(function () {
        $(".popups").hide();
        $("#" + this.rel).fadeIn("slow");
    });
    var divs = $('.mydivs>div');
    var now = 0; // currently shown div
    divs.hide().first().show();
    $("button[name=next]").click(function (e) {
        divs.eq(now).hide();
        now = (now + 1 < divs.length) ? now + 1 : 0;
        divs.eq(now).show(); // show next
    });
    $("button[name=prev]").click(function (e) {
        divs.eq(now).hide();
        now = (now > 0) ? now - 1 : divs.length - 1;
        divs.eq(now).show(); // or .css('display','block');
        //console.log(divs.length, now);
    });
});
$(document).keydown(function (e) {
    switch (e.which) {
        case 37:    //left arrow key
            $("button[name=next]").click();
            break;

        case 39:    //right arrow key
            $("button[name=prev]").click();
            break;

            break;
    }
});