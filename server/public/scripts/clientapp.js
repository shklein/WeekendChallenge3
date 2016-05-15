var statement = {};
var varA = 0;
var varB = 0;
var op = " ";

$(document).ready(function () {

//event listeners
$('.numA').on('click', function (){
  event.preventDefault();
  varA = $('#varA').val();
});

$('.numB').on('click', function () {
  event.preventDefault();
  varB = $('#varB').val();
});

$('#ops').on('click', 'button', function (){
  op = ($(this).attr('class'));
  statement = {
    x: varA,
    y: varB,
    type: op
  }

doMath(statement);
  });




function doMath (object) {
    $.ajax({
      type: 'POST',
      url: '/' + object.type,
      data: object,
      success: function(response) {
        console.log(response);
        $('#answer-box').text(response);
        }
    })
  };


  // function solution () {
  //   $.ajax({
  //     type: 'GET',
  //     url: '/',
  //     success: function(answer) {
  //       console.log(answer);
  //       $('#answer').text(answer);
  //     }
  //   })
  // }

  });
