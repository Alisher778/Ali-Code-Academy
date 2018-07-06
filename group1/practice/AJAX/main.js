$(document).ready(function () {
  // console.log($(this).load('demo.html'))
  // $('#wrap').load('demo.txt input:checked', function(data, farrux){
  //   if(farrux === 'success'){
  //     alert(data)
  //   } else {
  //     alert(success)
  //   }
  // });

  // $.get('demo.txt', function(data, status){
  //   if(status === 'success'){
  //     $('body').html(data)
  //   }
  // });

  $('#form').submit(function(e){
    e.preventDefault();
    var ser = $(this).serialize();
    var serArr = $(this).serializeArray();
    console.log(ser)
    console.log(serArr)
    $.ajax({
      url: 'demo.txt',
      data: ser,
      success: function(data){
        console.log(data)
      },
      error: function(err){
        console.log(err)
      }
    })
  })




})