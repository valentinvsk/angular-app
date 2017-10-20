$(document).ready(function(){
     $("#tuna").addClass('walking');
     $("#walk").on("click", function() {
       $("#tuna").removeClass();
       $("#tuna").addClass('walking');
     });
     $("#run").on("click", function() {
       $("#tuna").removeClass();
       $("#tuna").addClass('running');
     });
     $("#sit").on("click", function(){
       $("#tuna").removeClass();
       $("#tuna").addClass('sitting');
     });
     $("#off").on("click", function(){
       $("#tuna").removeClass();
     });
 });
