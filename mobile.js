let on = 1
let changeimg = () => {
    
    document.getElementById("jsprova").src = "./phone2.jpg"
    on = 2

}

let changeimg2 = () => {
    document.getElementById("jsprova").src = "./phone1.jpg"
    on = 1
}

let insertPass = () => {

if (on == 2){
    let counter = 0
    let password = prompt("Insert password")
    while (password != 1234){
        alert("Wrong password")
        password = prompt("Insert password")
        counter++ 
        if (counter == 5){
            alert("The phone is blocked refresh the page")
            break
    }   
}
if ( +password == 1234){
    on = 1
    document.getElementById("jsprova").src = "./phone3.jpg"}
}  
}

let validateForm = () => {
    if (document.acquisto.lastname.value==="") { 
    alert("Inserire cognome");
    return false;
    }
    if (document.acquisto.firstname.value==="") {
        alert("Inserire nome");
        return false;
      }
    if (document.acquisto.address.value==="") {
        alert("Inserire indirizzo");
        return false;
      }
    if (document.acquisto.emailaddress.value === "") {
        alert("Inserire indirizzo email");
        return false;
      }
    if (document.acquisto.product.value == "-") { 
    alert("Selezionare un prodotto");
    return false;
    }
    alert("Acquisto andato a buon fine");
    return true;
}
