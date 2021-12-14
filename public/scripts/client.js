/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  
  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  }

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('section#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  
  
  // event handlers
  const $icons = $('i.fas');
  const $tweets = $('article.tweet');
  
  $tweets.on('mouseover', function() {
    this.style.boxShadow = '5px 5px 10px #7563317c';
  });

  $tweets.on('mouseleave', function() {
    this.style.boxShadow = 'none';
  });
  
  $icons.on('mouseover', function() {
    this.style.color = 'rgb(255, 60, 0)';
  });

  $icons.on('mouseleave', function() {
    this.style.color = '#35cf7098';
  });

});

const createTweetElement = function(tweet) {
  const $newTweet = $('<article>').addClass('tweet');
  const $header = $('<header>');
  const $headerDiv = $('<div>');
  const $profileAvatar = $('<img>').attr('src', `${tweet.user.avatars}`);
  const $nameSpan = $('<span>').html(`${tweet.user.name}`);
  const $handleSpan = $('<span>').html(`${tweet.user.handle}`);
  const $content = $('<p>').html(`${tweet.content.text}`);
  const $footer = $('<footer>');
  const $dateCreatedSpan = $('<span>').html(`${tweet.created_at}`);
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