$(document).ready(function() {
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

    if (characters > -1 && key === 'Backspace' || key === 'Delete') {
      countChars(characters, counter, key);
    }
  });
});

const countChars = (characters, counter, key) => {
  if (characters > 140 && characters <= 141) {
    counter.innerHTML = -1;
    counter.style.color = 'red';
  } else if (characters > 141) {
    if (key === 'keypress') {
      counter.innerHTML -= 1;
    } else {
      counter.innerHTML -= -1;
    }
  } else {
    counter.style.color = '#545149';
    counter.innerHTML = characters;
  }
};