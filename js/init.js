(function($){
  $(function(){
    var counter = 0;
    $('.button-collapse').sideNav();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.snap').on('click', function() {
      window.location.href = "https://www.youtube.com/channel/UCWX3ATF1LEWSbaPkAaDgxZw";

      Materialize.toast($msg,4000);

    });
    $('.snap2').on('click',function() {

      Materialize.toast($msg,4000);

    });

    $('.person').hover( function() {
      counter++;
      if (counter % 2 == 1) {
        document.getElementById('author').innerHTML = "ShadowCypher";
        document.getElementById('descripttext').innerHTML = "A Web Developer, Star Wars fan, and (shockingly) a car enthusiast, Harris by no means was the creator of Hypercharged. Currently, he works at Rojo Technologies, developing websites based on the platform he helped work on: MySocialHub.";
      }
      else {
          document.getElementById('author').innerHTML = "Site Owner";
          document.getElementById('descripttext').innerHTML = "Harris Beg";

          document.getElementById('descript').style.height = "80%";
          document.getElementById('descript').style.width = "100%";
      }
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
