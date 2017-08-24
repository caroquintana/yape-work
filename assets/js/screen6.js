var tarje;
$(document).ready(function () {
    $("#continue").attr('disabled', 'disabled');
    $(".formulario").keyup(validateTarjeta);
    // On Click Of Submit Button
    $("#continue").click(onContinue);
    $('.tarjeta-espacio').load(loadContinue());


});
$("#new-tarjeta").keyup(function () {
    tarje = $(this).val();
    localStorage.setItem("tarjeta", tarje);
})
function validateTarjeta(){
     // To Disable Submit Button
        $("#continue").attr('disabled', 'disabled');
        // Validating Fields
        var tarjeta = $("#new-tarjeta").val();
        var mes = $("#mes").val();
        var anio = $("#ano").val();

       if ((tarjeta.length == 16) /*&& (mes >= 12)*/) {
          $("#continue").removeAttr('disabled');
                $("#sign-session").css({
                    "cursor": "pointer",
                    "box-shadow": "1px 0px 6px #333"
            });  
        }
}
function loadContinue() {
    tarje = localStorage.getItem("tarjeta").slice(12,16);
    console.log("tarjeta " + tarje);
    var html;
    html = `<div class="row">
                <div class="col s12 center">
                    <p>Enviamos un SMS con el código de validación<br>al número <b> ****`+ tarje + ` </b></p>
                </div>
            </div>`;

    $('.tarjeta-espacio').html(html);
}  
function onContinue(){
    $("#sign-session").css({
            "cursor": "default",
            "box-shadow": "none"
        });
        alert("Datos creados exitosamente..!!");
        //api call
        window.location.href = 'screen6-1.html';
}