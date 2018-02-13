$(document).ready(() => {
  console.log("ready");

  $('.set-btn').on('click', e=>{
    changeColor($('.brush'));
  })

  $(document).on('keyup', e=>{
    if (e.keyCode === 13) {
      changeColor($('.brush'));
    }
  })

  for (let i = 0; i < 100; i++) {
    const $square = $('<div>').addClass('square');
    $('body').append($square);
  }

  $('body').on('mouseover', e=>{
    if ($(e.target).hasClass('square')) {
      changeColor($(e.target));
    }
  })
});

const changeColor = ($obj) => {
  const color = $('.color-input').val();
  $obj.css('background-color', color);
}
