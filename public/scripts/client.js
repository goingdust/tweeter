/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET'
      })
      .done((tweets) => {
        renderTweets(tweets);
      })
      .fail((error) => console.log(`Error: ${error.responseJSON.error}`))
      .always(() => console.log('The tweet GET request was made!'));
  };
  
  loadTweets();
  
  const createTweetElement = function(tweet) {
    const date = $.timeago(tweet.created_at);
    
    const $newTweet = $('<article>').addClass('tweet');
    const $header = $('<header>');
    const $headerDiv = $('<div>');
    const $profileAvatar = $('<img>').attr('src', `${tweet.user.avatars}`);
    const $nameSpan = $('<span>').html(`${tweet.user.name}`);
    const $handleSpan = $('<span>').html(`${tweet.user.handle}`);
    const $content = $('<p>').html(`${tweet.content.text}`);
    const $footer = $('<footer>');
    const $dateCreatedSpan = $('<span>').html(`${date}`);
    const $footerDiv = $('<div>');
    const $flagIcon = $('<i>').addClass('fas fa-flag');
    const $retweetIcon = $('<i>').addClass('fas fa-retweet');
    const $likeIcon = $('<i>').addClass('fas fa-heart');
  
    $newTweet.append($header, $content, $footer);
    $header.append($headerDiv, $handleSpan);
    $headerDiv.append($profileAvatar, $nameSpan);
    $footer.append($dateCreatedSpan, $footerDiv);
    $footerDiv.append($flagIcon, $retweetIcon, $likeIcon);
  
    return $newTweet;
  };
  
  const renderTweets = function(tweets) {
    const $tweetsContainer = $('section#tweets-container');
    
    for (const tweet of tweets) {
      $tweetsContainer.append(createTweetElement(tweet));
    }
  };

  $('form').on('submit', function(event) {
    event.preventDefault();
    const tweetContent = $(this).serialize();
    
    $.ajax({
      url: '/tweets', 
      method: 'POST',
      data: tweetContent
      })
      .done((results) => {
        console.log(results);
      })
      .fail((error) => console.log(`Error: ${error.responseJSON.error}`))
      .always(() => console.log('The tweet POST request was made!'));
  });

});