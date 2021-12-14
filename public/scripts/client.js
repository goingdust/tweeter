/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
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
})