$(function() {

    // Fixed Header
    var header = $('#header');
    var introH = $('#intro').innerHeight();
    var scrollOffset = $(window).scrollTop();
    checkScroll(scrollOffset);
    $(window).on('scroll', function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });
    function checkScroll(scrollOffset) {
        if ( scrollOffset >= introH/10 ) {
            header.addClass('fixed');
        }
        else {
            header.removeClass('fixed');
        }
    }
    
    // Smooth Scroll
    $('[data-scroll]').on('click', function(event) {
      event.preventDefault();
      var $this = $(this);
      var blockId = $this.data('scroll');
      var blockOffset = $(blockId).offset().top;
      $('html, body').animate({scrollTop: blockOffset}, 500);
  });

  // Input
    $('.intro__input').on('input', function() {
        $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
    });
    $('.download__input').on('input', function() {
        $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
    });

  });