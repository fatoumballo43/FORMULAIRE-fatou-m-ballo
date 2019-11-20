function compteur(str) {
	var lng = str.length;
	document.getElementById("chaine").innerHTML = lng + ' / 400 caractères';
}
function validation()                                    
{ 
    var nomprenom = document.forms["Formu"]["nomprenom"];               
    var email = document.forms["Formu"]["email"];    
    var telephone = document.forms["Formu"]["telephone"];  
    var motdepasse = document.forms["Formu"]["motdepasse"];  
    var adresse = document.forms["Formu"]["Adresse"];  
   
    if (nomprenom.value == "")                                  
    { 
        window.alert("Merci d'entrer votre prénom et nom de famille."); 
        nomprenom.focus(); 
        return false; 
    } 
   
    if (adresse.value == "")                               
    { 
        window.alert("Merci d'entrer votre adresse."); 
        adresse.focus(); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        window.alert("Merci d'entrer une adresse mail valide."); 
        email.focus(); 
        return false; 
    } 
   
    if (telephone.value == "")                           
    { 
        window.alert("Merci d'entrer votre numéro de télephone."); 
        telephone.focus(); 
        return false; 
    } 
   
    if (motdepasse.value == "")                        
    { 
        window.alert("Merci d'entrer votre mot de passe."); 
        motdepasse.focus(); 
        return false; 
    } 
   
    return true;
}
