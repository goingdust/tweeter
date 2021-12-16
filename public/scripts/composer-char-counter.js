$(document).ready(function() {
  
  const countChars = (characters, counter, key) => {
    if (characters > 140 && characters <= 141) {
      counter.innerHTML = -1;
      $(counter).addClass('counter-red');
    } else if (characters > 141) {
      if (key === 'keypress') {
        counter.innerHTML -= 1;
      } else {
        counter.innerHTML -= -1;
      }
    } else if (characters >= 0) {
      $(counter).removeClass('counter-red');
      counter.innerHTML = characters;
    } else if (characters < 0) {
      $(counter).removeClass('counter-red');
      counter.innerHTML = 0;
    }
  };
  
  $('textarea').on('keypress', function(event) {
    const characters = $(this).val().length + 1;
    const counter = $(this.closest('form')).find('output.counter')[0];
    const key = event.type;

    countChars(characters, counter, key);
  });

  $('textarea').on('keydown', function(event) {
    const characters = $(this).val().length - 1;
    const counter = $(this.closest('form')).find('output.counter')[0];
    const key = event.key;

    if (key === 'Backspace') {
      countChars(characters, counter, key);
    }
  });
});