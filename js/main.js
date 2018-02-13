$(document).ready(() => {
  console.log("ready");

  $('.set-btn').on('click', e=>{
    changeColor();
  })

  $(document).on('keyup', e=>{
    if (e.keyCode === 13) {
      changeColor();
    }
  })

  for (let i = 0; i < 100; i++) {
    const $square = $('<div>').addClass('square');
    $('body').append($square);
  }

  $('body').on('click', e=>{
    if ($(e.target).hasClass('square')) {
      $(e.target).addClass('bgc-green');
    }
  })
});

const changeColor = () => {
  const color = $('.color-input').val();
  $('.brush').css('background-color', color);
  $('.color-input').val('');
}
