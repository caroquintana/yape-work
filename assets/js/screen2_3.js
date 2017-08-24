var numero;//obtain number from local storage
var codigo = []; //save the codes 
var checkbox = false;//if checkbox is false

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
//listener to checkbox
$("#test5").change(function () {
    if ($(this).is(':checked')) {
        // Checkbox is checked..
        checkbox = true; //if checkbox is true is checked, validate
        console.log("checked");
        validateCellphone();
    } else {
        console.log("Not checked, validate again");
        checkbox = false;//if checkbox is false is not checked, validate
        validateCellphone();
    }
});
//validations for cellphone only
function validateCellphone() {
    console.log('validate');
    $("#accept-continue").attr('disabled', 'disabled');
    var cellphone = $("#number").val();
    console.log(checkbox);
    if ((cellphone.toString().length === 9) && (checkbox)) {
        // To Enable Submit Button
        $("#accept-continue").removeAttr('disabled');
        $("#accept-continue").css({
            "cursor": "pointer",
            "box-shadow": "1px 0px 6px #333"
        });
    }
}
//Endpoint 2
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
    window.setTimeout(secondCounter, 3000);//set time interval
}

