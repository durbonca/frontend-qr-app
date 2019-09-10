$(function(){
    $('.hg-standardBtn').on("click",function(){
        var btn = $(this).data('skbtn');
        var email = $("#email").val();
        email += btn;
        $("#email").val(email);
    });

    $('.hg-functionBtn').on("click",function(){
        var btn = $(this).data('skbtn');
        if(btn=="{bksp}"){
            var email = $("#email").val().slice(0,-1);    
        }
        $("#email").val(email);
    });
});