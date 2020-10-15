$(function(){
    $('.centericon').on('click', function(){
        $('.nav').slideToggle(300, function(){
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style')
            }
        });  
    });
    
});
