
// JavaScript Document
$( function() {

    $("map area").click( function(){

      if ($(this).attr("id") == "hole") {
         $("#feedback").css("color","green");
         $("#feedback").html("Use this to poke a hole with the connector in the main line");
      }

      if ($(this).attr("id") == "measure") {
         $("#feedback").css("color","green");
         $("#feedback").html("Use this to measure your tube lines and area you want to put the drip system.");
      }

      if ($(this).attr("id") == "scissors") {
         $("#feedback").css("color","green");
         $("#feedback").html("Use scissors to cut tubing to fit as needed.");
      }

  $("#feedback").css("backgroundColor","yellow");
  $('#myModal').modal("show");

    });
});