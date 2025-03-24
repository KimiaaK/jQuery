//does exactly the same thing as writing the <script> at the end of
//the body in the index.html file
//$(document).ready(function(){
//    $("h1").css("color","red");  
//})


//not advised as index.js is fpr behaviour and not appearrance
//console.log($('h1').css('font-size')); //gives you the value of h1
//$('h1').css('font-size', '5rem'); //set the value

$('h1').addClass('big-title margin-50');

$('h1').text('bye');
$('button').html(<em>Hey</em>);
$('a').attr('href','https://yahoo.com'); //anchor tag and also the content of the link was changed to yahoo instead of the google
//it was basically rewritten.


// a class is also an html attribute

//adding an event listener:
$('h1').click(function(){
    $('h1').css('color', 'purple');
});

$('button').click(function(){
    $('h1').css('color','purple');
});

$('input').keypress(function(event){
    console.log(event.key);
});


//every key that we press is shown on the H1 
$(document).keypress(function(event){
    $('h1').text(event.key);
});