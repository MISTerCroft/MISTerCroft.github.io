// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("Name and Gender") == "Name and Gender") {
         $("#feedback").css("color","red");
         $("#feedback").html("This just says your name");
      }

      if ($(this).attr("This area needs to be accurate") == "This area needs to be accurate") {
         $("#feedback").css("color","green");
         $("#feedback").html("This tells investigators where to get you from");
      }

      if ($(this).attr("Please make an appointment if you do not have an ID") == "Please make an appointment if you do not have an ID") {
         $("#feedback").css("color","red");
         $("#feedback").html("Impotant, but not your pickup location");
      }

  $("#feedback").css("backgroundColor","yellow");
  $('#myModal').modal("show");

   });
}); //end main jQuery function
