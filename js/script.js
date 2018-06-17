//first way to add active link on scroll
$(document).ready(function($){
  var path = window.location.pathname.split("/").pop();
  if (path == ''){
    path = '#home';
  }

  var target = $('nav a[href="'+path+'"]');
  target.addClass('active');
}); 