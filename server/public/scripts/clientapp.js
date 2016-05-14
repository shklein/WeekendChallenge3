$(document).ready(function () {
var statement = 'test';
//event listeners
$('.numA').on('click', function (){
  event.preventDefault();
  console.log('works');
  //save input to object
});

$('.numB').on('click', function () {
  event.preventDefault();
  console.log('works');
  //save input to object
});

$('#ops').on('click', function (){
  console.log('works');
  //save class to object
});

doMath();

function doMath () {
  //if (statement.length? == 3)
    $.ajax({
      type: 'POST',
      url: '/',
      data: statement,
      success: function(response) {
        console.log('got it');
        }
    })
  }

  function answer () {
    $.ajax({
      type: 'GET',
      url: '/',
      data: res,
      success: function (response){
        $('#answer').text(response);
      }
    })
  }

  });
