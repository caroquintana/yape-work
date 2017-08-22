//1.endpoint: registerNumber, response.data.code
$(document).ready(function () {
   $.ajax({
        url: '/api/registerNumber',
        type: 'POST',
        data: {
            'phone': '12345678',
            'terms': 'true'
        },
    })
    .done(function(res) {
        console.log("success");
        console.log(res);
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
    
});
