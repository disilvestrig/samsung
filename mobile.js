let on = 0
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
