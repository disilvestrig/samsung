let changeimg = () => {
    
    document.getElementById("jsprova").src = "./phone2.jpg"

}

let changeimg2 = () => {
    document.getElementById("jsprova").src = "./phone1.jpg"
}

let insertPass = () => {
if (document.getElementById("jsprova").src == "./phone2.jpg"){
let x = 0
let password = prompt("Insert password")
while (password != 1234){
    alert("Wrong password")
    password = prompt("Insert password")
    x++ 
    if (x == 5){
        alert("The phone is blocked refresh the page")
        break
    }   
}
if ( +password == 1234){
    document.getElementById("jsprova").src = "./phone3.jpg"
}
}  
}
