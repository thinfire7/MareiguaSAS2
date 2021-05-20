function validarSesion() {

    for (var i = 1; i <= 100; i++) {
			
        var impre=i;
        
        if(multiplo(i,3)) {
            impre="mare";				
        }
        
        if(multiplo(i,5)) {
            if(impre=="mare") {
                impre+="igua";
            }
            else{
                impre="igua";
            }
        }
        
        console.log(i + ": " + impre);
    }

}

window.onload = validarSesion();

function multiplo(numero, multiplo) {

    if(numero%multiplo==0) {
        return true;
    }
    else {
        return false;
    } 
}
