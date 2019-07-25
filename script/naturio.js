$(document).ready(function(){
    //click in money USD
    $('#usd').on('click', function(e){
      e.preventDefault();//wymagany w przypadku <a> aby nie ładował skrypt jako podstrone, jako zamiennik href='#', koło function musi być (e)
      $('#list-money').slideToggle(500);
    });
    //click in Cart
    $('#clickcart').on('click', function(e){
      e.preventDefault();//wymagany w przypadku <a> aby nie ładował skrypt jako podstrone, jako zamiennik href='#', koło function musi być (e)
      $('#mycart').slideToggle(1000);
    });
    //click in login
    $('#clicklogin').on('click', function(e){
      e.preventDefault();
      $('#login').slideDown(500);
    });
    //click in close login
    $('.close').on('click', function(e){
      e.preventDefault();
      $('#login').slideUp(100);
      $('#subscribe').slideUp(100);
    });
    //open subscribe auto
    $('body').on('click', function(){
      $('#subscribe').delay(5000);
      $('#subscribe').slideDown(500);
      
      //opóźnia następne wyświetlanie
      $('.close').on('click', function(){
        $('#subscribe').delay(900000);
      });
    });
  });

