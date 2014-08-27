//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function () {


$('body').append("<h1>Todo.ly</h1>");
$('body').append('<form><input type="text" id="item">');
$('body').append("<button>Create Todo</button>");


  $('button').one('click', function () {
    $('body').append('<div class="line"></div><h2>Todo!</h2>')
  });


  $('button').click(function (e) {
    e.preventDefault();
    var item = $('#item').val();
    $('body').append('<ul>' + item + '</ul><span class="ex">X</span>')
    $('input').val("")



    setTimeout(function () {
      $('.flash').remove();
      $('h2').after('<div class="flash">Todo created<span class="ex">X</span></div>')
      $('.flash').fadeOut(5000, function () {
        $('.flash').remove();
      });
      $('.ex').click(function () {
        $('.flash').remove();
      });
    });

  });

});




