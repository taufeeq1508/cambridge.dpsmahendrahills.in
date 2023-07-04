// $(document).ready(function () {
// $('.nlitre').click( function() {
//     $('#literacy').removeClass('active show');
//     $('#clubs').addClass('active show');    
//     $('#admover').removeClass('nlitre');
//     $('#admover').addClass('nclub');
//     $('#noprev').removeClass('nopre');
//     $('#noprev').addClass('plitre');    
// });
// $('.nclub').click( function() {
//     $('#clubs').removeClass('active show');
//     $('#ncc').addClass('active show');    
//     $('#admover').removeClass('nclub');
//     $('#admover').addClass('nncc');
//     $('#noprev').removeClass('plitre');
//     $('#noprev').addClass('pclub');    
// });
// $('.nncc').click( function() {
//     $('#clubs').removeClass('active show');
//     $('#excu').addClass('active show');    
//     $('#admover').removeClass('nncc');
//     $('#admover').addClass('nexcur');
//     $('#noprev').removeClass('pclub');
//     $('#noprev').addClass('pncc');    
// });
// $('.pclub').click( function() {
//     $('#clubs').removeClass('active show');
//     $('#litre').addClass('active show');    
//     $('#admover').removeClass('nncc');
//     $('#admover').addClass('nlitre');
//     $('#noprev').removeClass('pclub');
//     $('#noprev').addClass('plitre');    
// });
// $('.plitre').click( function() {
   
//     $('#literacy').addClass('active show');
//     $('#clubs').removeClass('active show');    
//     $('#admover').removeClass('nclub');
//     $('#admover').addClass('nlitre');
//     $('#noprev').removeClass('plitre');
//     $('#noprev').addClass('nopre');    
// });
// });
$(document).ready(function () {
    $("a.poup").click(function () {
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
    $(".child").click(function () {
        var homesrc = $('.home').attr('src')
        var imgsrc = $(this).attr('src');
        if (homesrc != imgsrc){
            $(this).attr('src', homesrc);
            $(".home").fadeOut(500, function() {
            $('.home').attr('src', imgsrc)}).fadeIn(600);
        }
      });
      $(".splchild").click(function () {
        var homesrc = $('.splhome').attr('src')
        var imgsrc = $(this).attr('src');
        if (homesrc != imgsrc){
            $(this).attr('src', homesrc);
            $(".splhome").fadeOut(500, function() {
            $('.splhome').attr('src', imgsrc)}).fadeIn(600);
        }
      });
});
$(document).keydown(function(e){
    switch (e.which){
    case 37:    //left arrow key
        $("button[name=next]").click();
        break;
    
    case 39:    //right arrow key
        $("button[name=prev]").click();
        break;
    
        break;
    }
});