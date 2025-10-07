function validazioneEmail(string){
    var validatore=/[a-z0-9A-Z]*@[a-zA-Z]*[.][a-zA-Z]*/
    if (string.match(validatore)){
        return true
    }
    else{
        return false
    }
}
function validazioneIva(string){
    var validatore=/[0-9]*/
    if (string.match(validatore)){
        return true
    }
    else{
        return false
    }
}
function validazioneCodice(string){

    var validatore=/^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$/  /*CPPGRL07S02D653Z*/

    if(string.match(validatore)){
        return true
    }
    else{
        return false
    }
}




function iva(stringa){
    if ((stringa.length>0) && (validazioneIva(stringa)) && (stringa.length===11)){
        return true;
    }
    else{
        return false
    }
}

function codice(stringa){

        if (validazioneCodice(stringa) && stringa.length === 16){

        return true

    }
    else{
        alert("OK");
        return false
    }
}

function email(stringa){
    if (stringa.length>0 && validazioneEmail(stringa)){
        return true;
    }
    else{
        return false
    }
}



function validate_input(form){
	var error_message="";
	if(!email(form.mail.value)){
		error_message+="email non valida \n"
	}
    if(!iva(form.partitaIva.value)){
        error_message+="partita iva non valida \n"
    }
    if(!codice(form.codiceF.value)){
        error_message+="codice fiscale non valido \n"
    }
	if(error_message.length>0){
		alert(error_message);
		return false;
	}
	else{
		return true;
	}
}