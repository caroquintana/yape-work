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