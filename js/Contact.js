$(document).ready(function() {

$('li').hover(function() {
   $(this).fadeTo(100, .25);
      },
   function() {
      $(this).fadeTo(100, 1);
     });  

   var savetext = $(this).text();
  
   console.log("1" + savetext);

 $('li').click(function() {

     $(this).css("background-color","yellow");
         if ($(this).text() === "clicked"){
           $(this).text(savetext);
           console.log("2" + savetext);
         }
         else {
             $(this).text("clicked");
             console.log("3" + "something else");
         }
});
});
