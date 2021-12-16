$(document).ready(function() {
  
  const $body = $(document).find('body');
  const $newTweetSection = $body.find('section.new-tweet');
  const $formToggleButton = $($body.find('nav')).find('div');
  const $scrollUpButton = $body.find('button.scroll-up');

  $newTweetSection.hide();
  $scrollUpButton.hide();

  $formToggleButton.on('click', function() {
    $newTweetSection.toggle();
  });

  $(document).on('scroll', function() {
    $('main').addClass('main-adjust');
    $scrollUpButton.show();
    $formToggleButton.hide();

    if ($(this).scrollTop() == 0) {
      $formToggleButton.show();
      $scrollUpButton.hide();
      $('main').removeClass('main-adjust');
    }
  });

  $scrollUpButton.on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 300);
    $newTweetSection.show();
  });

});