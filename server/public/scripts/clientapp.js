var statement = {};
var varA = 0;
var varB = 0;
var op = " ";

$(document).ready(function () {

//event listener

$('#ops').on('click', 'button', function (){
  event.preventDefault();
  varA = $('#varA').val();
  varB = $('#varB').val();
  op = ($(this).attr('class'));

  statement = {
    x: varA,
    y: varB,
    type: op
  }

doMath(statement);
  });

$('#clear-button').on('click', function () {
  clearAll();
})


function doMath (object) {
    $.ajax({
      type: 'POST',
      url: '/' + object.type,
      data: object,
      success: function(response) {
        console.log(response);
        $('#answer-box').append('<h2>The answer is:\t' + response + '</h2>');
        }
    })
  };

function clearAll() {
  $('#doMath').find("input[type=text], textarea").val(" ");
  op = " ";
  $('#answer-box').empty();
};


  });
