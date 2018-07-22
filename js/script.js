$(function(){
  var documentEl = $(document),
  fadeElem = $('.fade-scroll');

  documentEl.on('scroll', function(){
    var currScrollPos = document.scrollTop();

    fadeElem.each(function(){
      var $this = $(this),
      elemOffsetTop = $this.offset().top;
      if (currScrollPos < elementOffsetTop) $this.css('opacity', 1 -(currScrollPos-elemOffsetTop)/400);
    });
  });
});