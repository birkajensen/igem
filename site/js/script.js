
// controlling the margins on menu moving it into the page if it is active

$(function() {
  $('.panel').click(function() {
    if ($(this).hasClass('activestate')) {
      $(this).removeClass('activestate');
    } else {
      $('.panel').removeClass('activestate');
      $(this).addClass('activestate');
    }
  });
});

