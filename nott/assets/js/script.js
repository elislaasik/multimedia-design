
$(document).ready(function() { //when html is ready

   $(".read").on("click", function(){ //for every read button
     var targetName = this.getAttribute("data-target"); //with data target
     var targetElement = document.getElementById(targetName); //get by that target name
     targetElement.classList.add("open"); //then display it
   });

   $(".modal").on("click", function(){ // when the modal is clicked
     this.classList.remove("open"); // hide it
   });
});
