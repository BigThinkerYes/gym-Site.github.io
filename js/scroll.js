$(document).ready(function(){
  var scrollLink = $('.scroll');

  //smooth scroll
  scrollLink.click(function(e){
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000)
  });
  //end smooth scroll


    //change active link based on location(this the added script)
    //<li class="nav-item active"> --second way to add active link on scroll
   /* $(window).scroll(function(){
        var scrollbarLocation = $(this).scrollTop();

        console.log(scrollbarLocation);
        scrollLink.each(function(){
            var sectionOffset = $(this.hash).offset().top
                if (sectionOffset <= scrollbarLocation){
                   $(this).parent().addClass('active');
                   $(this).parent().siblings().removeClass('active');
                }
        });
    });
    //end added script*/

});//end document ready function