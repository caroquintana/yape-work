$(document).ready(function () {
    $("#accept-continue").attr('disabled', 'disabled');
    $("#form-cellphone").keyup(validateCellphone);
    $("#accept-continue").click(onLoginCellphone);

    // On Click Of Submit Button
    
});

function validateCellphone() {
    $("#accept-continue").attr('disabled', 'disabled');
    var cellphone = $("#number").val();
    if (cellphone.length >= 9) {
        // To Enable Submit Button
        $("#accept-continue").removeAttr('disabled');
        $("#accept-continue").css({
            "cursor": "pointer",
            "box-shadow": "1px 0px 6px #333"
        });

    }
}
function onLoginCellphone(){
    $("#accept-continue").click(function () {
        $("#accept-continue").css({
            "cursor": "default",
            "box-shadow": "none"
        });
        alert("Teléfono ingresado correctamente..!!");
        window.location.href = 'screen3.html';
    });
}
$(document).ready(function () {
  // Carousel
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  	autoplay()   
	function autoplay() {
	    $('.carousel').carousel('next');
	    setTimeout(autoplay, 4500);
	}   
});

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