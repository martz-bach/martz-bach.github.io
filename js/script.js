$('.forms').validate({
    rules: {
        name: "required"
    },
    messages: {
        name: "Введите имя"
    }
});

$('.forms').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");


        $('.forms').trigger('reset');
    });
    return false;
});

let inputs = document.querySelector('.inp'); 
let buttons = document.querySelector('.btn'); 
buttons.onclick = function(){
    setTimeout(() => inputs.value = '', 2000);
};

buttons.ontouchstart = function(){
    setTimeout(() => inputs.value = '', 2000);
};
