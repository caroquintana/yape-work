$(document).ready(function () {
   
    $(".aceptar-screen3").click(getUser, validarCodigo);
});

function getUser() {

    if(window.location.href = 'screen4.html'){
    	//elimina el localstorage de numero para que no genere alert.
    	window.localStorage.removeItem("numero");
    }
}

function validarCodigo(){
	var inputCode = $('#code').val();
	var code = localStorage.getItem('codigo2');
	console.log(inputCode);
	console.log(code);

	if(inputCode === code){
    	getUser();
	}else{
		alert('El código es incorrecto. Ingrese nuevamente');
	}

}