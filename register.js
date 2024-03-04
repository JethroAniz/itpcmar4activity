

//string = "raniel", 'raniel" , "23"
//number - 24, 24.1, 1230c

//boolen - true, false, 1 or 0, = false, >




let txtUsername = document.querySelector("#txtUsername");
let btnRegister = document.querySelector("#btnRegister");

btnRegister.onclick = function () {
    btnRegister(txtUsername.value)
}
function register (username) {
    console.log(username)
}