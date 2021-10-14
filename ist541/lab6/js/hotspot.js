// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "name") {
         $("#feedback").css("color","red");
         $("#feedback").html("This just says your name");
      }

      if ($(this).attr("id") == "school") {
         $("#feedback").css("color","green");
         $("#feedback").html("This tells investigators where to get you from");
      }

      if ($(this).attr("id") == "caid") {
         $("#feedback").css("color","red");
         $("#feedback").html("Impotant, but not your pickup location");
      }

  $("#feedback").css("backgroundColor","yellow");
  $('#myModal').modal("show");

   });
}); //end main jQuery function
