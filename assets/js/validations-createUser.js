$(document).ready(function () {
    $("#sign-session").attr('disabled', 'disabled');
    $("#myform").keyup(validateForm);
    // On Click Of Submit Button
    $("#sign-session").click(onLogin);
});

function validateForm(){
     // To Disable Submit Button
        $("#sign-session").attr('disabled', 'disabled');
        // Validating Fields
        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        if (!(name == "" || email == "" || password == "")) {
            if (filter.test(email) & password.length >= 6) {
                // To Enable Submit Button
                $("#sign-session").removeAttr('disabled');
                $("#sign-session").css({
                    "cursor": "pointer",
                    "box-shadow": "1px 0px 6px #333"
                });
            }
        }
}
function onLogin(){
    $("#sign-session").css({
            "cursor": "default",
            "box-shadow": "none"
        });
        alert("Datos creados exitosamente..!!");
        //api call
        window.location.href = 'screen5.html';
}