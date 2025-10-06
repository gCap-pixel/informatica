function onlylettere(string){
    var lettere= /^[a-zA-Z]+$/;
    if (string.match(lettere)){
        return true;
    }
    else{
        return false;
    }
}
function validazioneEmail(string){
    var lettere=/[a-z0-9A-Z]*@[a-zA-Z]*[.][a-zA-Z]*/
    if (string.match(lettere)){
        return true
    }
    else{
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
	if(!email(form.email.value)){
		error_message+="email sbagliata";
	}

	if(error_message.length>0){
		alert(error_message);
		return false;
	}
	else{
		return true;
	}
}