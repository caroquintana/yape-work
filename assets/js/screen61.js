var pass;
$(document).ready(function () {
    //$("#continue-profile").attr('disabled', 'disabled');
    //$(".formulario").keyup(validatePass);
    // On Click Of Submit Button
    $("#continue-profile").click(onContinueProfile);
});

/*$("#passwod").keyup(function () {
    pass = $(this).val();
})
function validatePass(){
     // To Disable Submit Button
        $("#continue-profile").attr('disabled', 'disabled');
        // Validating Fields
        var passw = $("#passwod").val();

        if ((passw.length == 16)) {
          $("#continue-profile").removeAttr('disabled');
                $("#sign-session").css({
                    "cursor": "pointer",
                    "box-shadow": "1px 0px 6px #333"
            });  
        }
}*/
function onContinueProfile(){
    $("#sign-session").css({
            "cursor": "default",
            "box-shadow": "none"
        });
        alert("Datos creados exitosamente..!!");
        //api call
        window.location.href = 'screen7.html';
}