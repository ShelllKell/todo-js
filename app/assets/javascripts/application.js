//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function () {


  $('body').append("<h1>Todo.ly</h1>");

  $('body').append('<form><input type="text" id="item">');

  $('body').append("<button>Create Todo</button>");


  $('button').one('click', function () {
    $('body').append('<h2>My Todos</h2>')
  });


  $('button').click(function (e) {
    e.preventDefault();
    var item = $('#item').val();
    $('body').append("<ul>" + item + "</ul>")
    $('input').val("")

    setTimeout(function () {
      $('body').append('<div class="flash">Todo created</div>')
      $('div').fadeOut(5000, function () {
        $('div').remove();
      });

    });

  });
});




