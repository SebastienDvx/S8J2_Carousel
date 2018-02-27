function switchTab(evt, cityName) {
    // Declaration des variables
    var i, tabcontent, tablinks;

    // Récupération des éléments avec class="tabcontent" et les cacher
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Récupération des éléments avec class="tablinks" et supprime la classe "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Affiche l'onglet en cours, ajoute une classe "active" au bouton qui ouvre l'onglet
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

//SLIDE SHOW

   $(function(){
      setInterval(function(){
         $(".slideshow ul").animate({marginLeft:-350},800,function(){
            $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
         })
      }, 3500);
   });

     src="https://code.jquery.com/jquery-3.2.1.min.js"
     integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
     crossorigin="anonymous">

//CAROUSEL
 $(document).ready(function () {
     //rotation speed and timer
     var speed = 3000;

     var run = setInterval(rotate, speed);
     var slides = $('.slide');
     var container = $('#slides ul');
     var elm = container.find(':first-child').prop("tagName");
     var item_width = container.width();
     var previous = 'prev'; //id of previous button
     var next = 'next'; //id of next button
     slides.width(item_width); //set the slides to the correct pixel width
     container.parent().width(item_width);
     container.width(slides.length * item_width); //set the slides container to the correct total width
     container.find(elm + ':first').before(container.find(elm + ':last'));
     resetSlides();


//if user clicked on prev button

$('#buttons a').click(function (e) {
   //slide the item

   if (container.is(':animated')) {
       return false;
   }
   if (e.target.id == previous) {
       container.stop().animate({
           'left': 0
       }, 1500, function () {
           container.find(elm + ':first').before(container.find(elm + ':last'));
           resetSlides();
       });
   }

   if (e.target.id == next) {
       container.stop().animate({
           'left': item_width * -2
       }, 1500, function () {
           container.find(elm + ':last').after(container.find(elm + ':first'));
           resetSlides();
       });
   }

   //cancel the link behavior
   return false;

});

 //if mouse hover, pause the auto rotation, otherwise rotate it
 container.parent().mouseenter(function () {
     clearInterval(run);
 }).mouseleave(function () {
     run = setInterval(rotate, speed);
 });


 function resetSlides() {
     //and adjust the container so current is in the frame
     container.css({
         'left': -1 * item_width
     });
 }

});
//a simple function to click next link
//a timer will call this function, and the rotation will begin

function rotate() {
 $('#next').click();
}
