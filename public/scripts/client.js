/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const loadTweets = function(tweetContent) {

    $.ajax({
      url: '/tweets',
      method: 'GET'
      })
      .done((tweets) => {
        renderTweets(tweets, tweetContent);
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
  
  const renderTweets = function(tweets, tweetContent) {
    const $tweetsContainer = $('section#tweets-container');
    console.log(tweetContent);
    
    for (const tweet of tweets) {

      if (tweetContent !== undefined && tweetContent === tweet.content.text) {
        $tweetsContainer.prepend(createTweetElement(tweet));
      } else if (tweetContent === undefined) {
        $tweetsContainer.prepend(createTweetElement(tweet));
      }

    }
  };

  $('form').on('submit', function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    const tweetContent = $($(this).children('textarea')).val();
    
    if (tweetContent.replaceAll(' ', '') === '' || tweetContent === null || tweetContent.length === 0) {
      return alert('You can\'t post an empty tweet!');
    } else if (tweetContent.length > 140) {
      return alert('Too many characters! Slow down there, bud!');
    }
    
    $.ajax({
      url: '/tweets', 
      method: 'POST',
      data
      })
      .done(() => {
        loadTweets(tweetContent);
      })
      .fail((error) => console.log(`Error: ${error.responseJSON.error}`))
      .always(() => console.log('The tweet POST request was made!'));
  });

});