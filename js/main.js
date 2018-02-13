$(document).ready(() => {
  console.log("ready");

  $('.set-btn').on('click', e=>{
    const color = $('.color-input').val();
    $('.brush').css('background-color', color)
  })
});
