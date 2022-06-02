$(".whack1").click(function() {
    $(".mole1").hide();
});

$(".whack2").click(function() {
    $(".mole2").hide();
});

$(".whack3").click(function() {
    $(".mole3").hide();
    $(".mole1, .mole2").show();
    
});

$(".reset").click(function() {
    $(".mole1, .mole2, .mole3").show();
});

$(".hole").click(function() {
    $(".game").hide();
});