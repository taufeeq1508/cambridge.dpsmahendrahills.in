// $(document).ready(function () {
//   $('.admov').click( function() {
//         $('#overview').removeClass('active show');
//         $('#agecrit').addClass('active show');    
//         $('#admover').removeClass('admov');
//         $('#admover').addClass('nagecr');
//         $('#noprev').removeClass('nopre');
//         $('#noprev').addClass('agecr');    
//     });
//     $('.nopre').click( function() {
//         $('#overview').addClass('active show');
//         $('#agecrit').removeClass('active show'); 
//         $('#pills-tab').addClass('active');
//         $('#pills-tab1').removeClass('active'); 

//     });
//     $('.prechk').click( function() {
//         $('#agecrit').addClass('active show');
//         $('#checkli').removeClass('active show');
//         $('#admover').removeClass('nchkl');
//         $('#admover').addClass('admov');
//         $('#noprev').removeClass('prechk');
//         $('#noprev').addClass('nopre'); 

//     });

//     $('.nagecr').click( function() {       
//         $('#agecrit').removeClass('active show');
//         $('#checkli').addClass('active show');     
//         $('#admover').removeClass('nagecr');
//         $('#admover').addClass('nchkl');
//         $('#noprev').removeClass('agecr');
//         $('#noprev').addClass('prechk');    
//     });
//     $('.agecr').click( function() {
//         $('#agecrit').addClass('active show');
//         $('#overview').removeClass('active show');     
//         $('#admover').removeClass('nagecr');
//         $('#admover').addClass('admov');
//         $('#noprev').removeClass('agecr');
//         $('#noprev').addClass('nopre');    
//     });
// });

$(document).ready(function () {
    $("a.popup").click(function () {
        $(".popups").hide();
        if (this.rel) {
            const divId = this.rel.replace("div", "");
            if (!isNaN(divId)) {
                now = (Number(divId) - 1) < 0 ? (divs.length - 1) : (Number(divId) - 1);
            }
        }
        $("#" + this.rel).fadeIn("slow");
    });
    var divs = $('.mydivs>div');
    var now = 0; // currently shown div
    divs.hide().first().show();
    $("button[name=next]").click(function (e) {
        divs.eq(now).hide();
        now = (now + 1 < divs.length) ? (now + 1) : 0;
        divs.eq(now).show(); // show next
    });
    $("button[name=prev]").click(function (e) {
        divs.eq(now).hide();
        now = (now > 0) ? now - 1 : divs.length - 1;
        divs.eq(now).show(); // or .css('display','block');
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