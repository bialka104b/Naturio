/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    //click in money USD
    $('#usd').on('click', function(e){
        e.preventDefault();//required for <a> so that it does not load the script as a substitute, as a substitute for href = '#', the function wheel must be (e)
        $('#list-money').slideToggle(500);
    });
    //click in Cart
    $('#clickcart').on('click', function(e){
        e.preventDefault();//required for <a> so that it does not load the script as a substitute, as a substitute for href = '#', the function wheel must be (e)
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
        $('#subscribe').slideDown(500).delay(1000);
        //Delays the next display
        $('.close').on('click', function(){
            $('#subscribe').slideUp(500).delay(900000);
        });
    });
});

