$(document).ready(function() {
  
  const $newTweetSection = $($(document).find('body')).find('section.new-tweet');
  $newTweetSection.hide();
  
  const $formToggleButton = $($($(document).find('body')).find('nav')).find('div');

  $formToggleButton.on('click', function(event) {

    $newTweetSection.toggle();
  });

});