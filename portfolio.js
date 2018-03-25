$(document).ready(function() {
  $("#aboutl").click(function() {
      $('html, body').animate({
          scrollTop: 0
      }, 2000);
  });

  $("#portfoliol").click(function() {
      $('html, body').animate({
          scrollTop: $("#portheader").offset().top-35
      }, 2000);
  });

  $("#contactl").click(function() {
      $('html, body').animate({
          scrollTop: $("#contactHeader").offset().top-35
      }, 2000);
  });

});
