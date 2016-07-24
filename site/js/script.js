
// controlling the margins on menu moving it into the page if it is active

$(function() {
  $('.panel-heading').click(function() {
    if ($(this).hasClass('activestate')) {
      $(this).removeClass('activestate');
    } else {
      $('.panel-heading').removeClass('activestate');
      $(this).addClass('activestate');
    }
  });
});

$(function() {
  $('td').click(function() {
    if ($(this).hasClass('activestate')) {
      $(this).removeClass('activestate');
    } else {
      $('td').removeClass('activestate');
      $(this).addClass('activestate');
    }
  });
});