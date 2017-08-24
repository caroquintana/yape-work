$(document).ready(function () {
        $('#sign-session').click(onLogin);//listener to button click

});

function validateForm() {
    var valid = true;
    if (!(/^([a-zñáéíóú]{2,13})+$/.test($("#firstname").val()))) {
        $("#firstname").css("border", "1px solid red");
        alert('El nombre debe ser válido');
        valid = false;
    }
    if ($('#password').val() == '') {
        $("#password").css("border", "1px solid red");
        alert('Password no debe estar vacío');
        valid = false;
    }

    if (!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($('#email').val()))) {
        $("#email").css("border", "1px solid red");
        alert('Error en el email');
        valid = false;
    }

    return valid;
}

function onLogin() {
    if (validateForm()) { //If validate form is True
         window.location.href = 'screen5.html';
    }
}