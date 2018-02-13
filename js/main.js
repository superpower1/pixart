$(document).ready(() => {
  console.log("ready");

  let stampUrl = "";

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

  $('.stamp-btn').on('click', e=>{
    const movieName = $('.movie-name').val();
    const options = {
      url: `http://www.omdbapi.com/?apikey=2f6435d9&t=${movieName}`,
      method: 'get'
    }
    $.ajax(options).done(res=>{
      stampUrl = res.Poster;
      $('.preview').css("background-image","url("+ stampUrl +")")
    });
  })
});

const changeColor = ($obj) => {
  const color = $('.color-input').val();
  $obj.css('background-color', color);
}
