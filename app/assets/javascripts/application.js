//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function () {





  $('button').one('click', function () {
    $('body ul').prepend('<div class="line"></div><h2>Todo!</h2>')
  });

  $.get("/todos", function (data, status){
    $.each(data, function(index, todo){
      $('body ul').append('<li>' + todo.name + '</li>')
    });
  });

  $('button').click(function (e) {
    e.preventDefault();
    var item = $('#item').val();

    $.ajax({
      type: "POST",
      url: "/todos",
      data: { todo: {name: item}}
    }).then(function(data){
      $('body ul').append('<li>' + item + '</li>')
    }).fail(function(){
      window.alert('ohs noes!');
    });


    $('input[type="text"]').val("")


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




