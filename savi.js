 $(document).ready(function() {

     $(".menubtn").click(function() {
         $(".mainmenu .menu").toggleClass("active");
         $(".content .header .logs").toggleClass("active");
         $(".menubtn i").toggleClass("active");
     });


 });



 const log = document.querySelector(".user");
 const logs = document.querySelector('.logs');

 function display() {
     logs.classList.add('play')
 }

 function remove(event) {
     if (event.target.closest(".user")) return
     logs.classList.remove('play')

 }
 log.addEventListener('click', display)
 document.addEventListener('click', remove)

 $("#search").click(function() {
     $(".content .forms-table").addClass("table-active")
     $(".content .forms").addClass("forms-inactive");
 });
 $("#back").click(function() {
     $(".content .forms-table").removeClass("table-active");
     $(".content .forms").removeClass("forms-inactive");
 });