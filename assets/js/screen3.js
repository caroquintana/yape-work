$(document).ready(function () {
   
    $(".aceptar-screen3").click(getUser);
});

function getUser() {
    if(window.location.href = 'screen4.html'){
    	//elimina el localstorage de numero para que no genere alert.
    	window.localStorage.removeItem("numero");
    }
}