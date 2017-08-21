var photo_url = ''; //save pictures
$(document).ready(function () {
    $('#createUser').click(onLogin);//listener to button click
});


//This function validate the name and email and put a red border in case of error
function validateForm() {
    var valid = true;
    //name
    if (!(/^([a-zñáéíóú]{2,13})+$/.test($("#firstname").val()))) {
        $("#firstname").css("border", "1px solid red");
        alert('El nombre debe ser válido');
        valid = false;
    }

    if (!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($('#email').val()))) {
        $("#email").css("border", "1px solid red");
        alert('Error en el email');
        valid = false;
    }
    if ($('#country').val() == '') {
        $("#country").css("border", "1px solid red");
        alert('Country no debe estar vacío');
        valid = false;
    }
    return valid;
}
// If validations are true, then go to movies.html and save it into 
function onLogin() {
    if (validateForm()) { //If validate form is True
        $("#createUser").attr("href", "screen5.html");
    }
}


