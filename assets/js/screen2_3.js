var numero;//obtain number from local storage
var codigo = []; //save the codes 

$(document).ready(function () {
    $("#accept-continue").attr('disabled', 'disabled');//disabled button
    $("#accept-continue").click(getPhoneNumber); //if validations true
    $("#form-cellphone").keyup(validateCellphone);//validations
    $('.jsnumber').load(loadIndex());//charge the html class on loadindex
});


//obtain input number from client
$("#number").keyup(function () {
    numero = $(this).val();
    localStorage.setItem("numero", numero);
})
//if validations true, able the button screen2
function getPhoneNumber() {
    $("#accept-continue").css({
        "cursor": "default",
        "box-shadow": "none"
    });
    window.location.href = 'screen3.html';//go to screen3
    setPhone(); //if everything is ok, make the ajax request
}
//load the registernumber endpoint 1
function setPhone() {
    alert("Teléfono ingresado correctamente!!");
    $.ajax({
        url: '/api/registerNumber',
        type: 'POST',
        data: {
            'phone': numero,
            'terms': 'true'
        },
    }).done(function (res) {
        console.log("success");
        codigo.push(res.data.code);
        alert("tú codigo es: " + codigo);
        localStorage.setItem("codigo", codigo);
    }).fail(function () {
        console.log("error");
    }).always(function () {
        console.log("complete cellphone key");
    });
}
//validations for cellphone only
function validateCellphone() {
    $("#accept-continue").attr('disabled', 'disabled');
    var cellphone = $("#number").val();
    var validateTerms = $("#filled-in-box").val();
    if (cellphone.toString().length === 9) {
        // To Enable Submit Button
        $("#accept-continue").removeAttr('disabled');
        $("#accept-continue").css({
            "cursor": "pointer",
            "box-shadow": "1px 0px 6px #333"
        });

    }
}

var timeoutID;
function secondCounter() {
    if (numero != null) {
        console.log("Calling counter");
        $.ajax({
            url: '/api/resendCode',
            type: 'POST',
            data: {
                'phone': numero,
            },
        }).done(function (res) {
            console.log("success");
            console.log(res);
            alert('Este es tú nuevo código: ' + res.data);
        }).fail(function () {
            console.log("error");
        }).always(function () {
            console.log("complete cellphone resend code");
        });
    }
}

//load data and set timeOut for the counter
function loadIndex() {
    console.log('loading phone number from localstorage');
    numero = localStorage.getItem("numero");
    console.log("numero " + numero);
    var html;
    html = `<div class="row">
			    <div class="col s12 center">
			        <p>Enviamos un SMS con el código de validación<br>al número <b> `+ numero + ` </b></p>
			    </div>
		    </div>`;

    $('.jsnumber').html(html);
    window.setTimeout(secondCounter, 2000);//set time interval
}

