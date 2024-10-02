//wait until the jquery library finishes loading -- another way of doing this is defining the jquery script at the end of the body!!
// $(document).ready(function () {
//   $("h1").css("color", "red");
// });

//displays the selected key in H1
// $(document).keypress(function (event) {
//   $("h1").text(event.key);
// });

//changes the color of h1 to purple when the mouse is hovered over it
// $(document).on("mouseover", function () {
//   $("h1").css("color", "purple");
// });

//changes the color of h1 to purple when the h1 is clicked
// $(document).on("click", function () {
//   $("h1").css("color", "purple");
// });

//changes the color of  h1 on button click
// $("button").on("click", function () {
//   $("h1").css("color", "purple");
// });

//toggle it's appearance - shows and hides on button click
// $("button").on("click", function () {
//   $("h1").toggle();
// });

//fades out on button click - ca also use fadeIn
// $("button").on("click", function () {
//   $("h1").fadeOut();
// });

//fades in and out on button click
// $("button").on("click", function () {
//   $("h1").fadeToggle();
// });

//slides in and out on button click - can use also slideUp and slideDown
// $("button").on("click", function () {
//   $("h1").slideToggle();
// });

//design custom css for animation
//in the braces we can only add the css rules that have a NUMERIC value, can't change the color for example.
//can also change margin: 20px or margin: "20%"
// $("button").on("click", function () {
//   $("h1").animate({ opacity: 0.5 });
// });

//adding more animation chained to each other
//they will be done in order
$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
