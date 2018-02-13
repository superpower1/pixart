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
});

const changeColor = () => {
  const color = $('.color-input').val();
  $('.brush').css('background-color', color);
  $('.color-input').val('');
}
