$(document).ready(() => {
  console.log("ready");

  let stampUrl = "";
  let useStamp = false;

  $('.set-btn').on('click', e=>{
    changeColor($('.brush'));
    useStamp = false;
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
      if (useStamp) {
        $(e.target).css("background-image","url("+ stampUrl +")")
      } else {
        changeColor($(e.target));
      }
    }
  })

  $('.stamp-btn').on('click', e=>{
    const movieName = $('.movie-name').val();
    const options = {
      url: `http://www.omdbapi.com/?apikey=2f6435d9&t=${movieName}`,
      method: 'get'
    }
    $.ajax(options).done(res=>{
      stampUrl = res.Poster;
      $('.preview').css("background-image","url("+ stampUrl +")");
      useStamp = true;
    });
  })
});

const changeColor = ($obj) => {
  const color = $('.color-input').val();
  $obj.css('background-color', color);
}
