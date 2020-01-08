$(".button2").hide();
$(".button3").hide();

$(".button1").click(function() {
    $("img").fadeIn();
    $(".button2").fadeIn();
});
$(".eight").click(function() {
    $(".eight").css("border", "5px solid lime");
    $(".five").css("border", "5px solid transparent");
    $(".six").css("border", "5px solid transparent");
    $(".four").css("border", "5px solid transparent");
    $(".x").css("border", "5px solid transparent");
});
$(".six").click(function() {
    $(".six").css("border", "5px solid lime");
    $(".five").css("border", "5px solid transparent");
    $(".four").css("border", "5px solid transparent");
    $(".eight").css("border", "5px solid transparent");
    $(".x").css("border", "5px solid transparent");
});
$(".five").click(function() {
    $(".five").css("border", "5px solid lime");
    $(".four").css("border", "5px solid transparent");
    $(".six").css("border", "5px solid transparent");
    $(".eight").css("border", "5px solid transparent");
    $(".x").css("border", "5px solid transparent");
});
$(".x").click(function() {
    $(".x").css("border", "5px solid lime");
    $(".five").css("border", "5px solid transparent");
    $(".six").css("border", "5px solid transparent");
    $(".eight").css("border", "5px solid transparent");
    $(".four").css("border", "5px solid transparent");
});
$(".four").click(function() {
    $(".four").css("border", "5px solid lime");
    $(".five").css("border", "5px solid transparent");
    $(".six").css("border", "5px solid transparent");
    $(".eight").css("border", "5px solid transparent");
    $(".x").css("border", "5px solid transparent");
});
$(".button2").click(function() {
    $("img").fadeOut();
    $(".congrats").fadeOut();
    $(".button1").fadeOut();
    $(".button2").fadeOut();
    $("input").fadeOut();
    $(".button3").fadeIn();
    $(".creditcard").text("Thank you for using our website, we have all of your credit card and private info and we revealed it to everyone! Thanks for helping us!");
    $(".creditcard").css("color","darkblue");
});
$(".button3").click(function() {
    $(".button3").fadeOut();
    $(".antivirus").text("No antiviruses for you! We're calling the cops now.");
    $(".creditcard").fadeOut();
    $(".antivirus").css("color","darkred");
});
$(".eight").mouseenter(function() {
    $(".eight").css("border", "5px solid red");
    $(".five").css("border", "5px solid transparent");
    $(".six").css("border", "5px solid transparent");
    $(".four").css("border", "5px solid transparent");
    $(".x").css("border", "5px solid transparent");
});
$(".five").mouseenter(function() {
    $(".eight").css("border", "5px solid transparent");
    $(".five").css("border", "5px solid red");
    $(".six").css("border", "5px solid transparent");
    $(".four").css("border", "5px solid transparent");
    $(".x").css("border", "5px solid transparent");
});
$(".six").mouseenter(function() {
    $(".eight").css("border", "5px solid transparent");
    $(".five").css("border", "5px solid transparent");
    $(".six").css("border", "5px solid red");
    $(".four").css("border", "5px solid transparent");
    $(".x").css("border", "5px solid transparent");
});
$(".four").mouseenter(function() {
    $(".eight").css("border", "5px solid transparent");
    $(".five").css("border", "5px solid transparent");
    $(".six").css("border", "5px solid transparent");
    $(".four").css("border", "5px solid red");
    $(".x").css("border", "5px solid transparent");
});
$(".x").mouseenter(function() {
    $(".eight").css("border", "5px solid transparent");
    $(".five").css("border", "5px solid transparent");
    $(".six").css("border", "5px solid transparent");
    $(".four").css("border", "5px solid transparent");
    $(".x").css("border", "5px solid red");
});
