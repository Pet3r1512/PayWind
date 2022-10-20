function showPass(){
    var pass = document.getElementById('pass-input')
    var passConfirm = document.getElementById('pass-confirm')
    var eyeOn = document.getElementsByClassName('eye-on')
    var eyeOff = document.getElementsByClassName('eye-off')

    if(passConfirm){
        if(passConfirm.type == "password"){
            passConfirm.type = "text"
        } else{
            passConfirm.type = "password"
        }
    }

    if(pass.type == "password"){
        pass.type = "text"
        eyeOn[1].style.visibility = "hidden"
        eyeOn[1].style.display = "none"
        eyeOff[1].style.visibility = "visible"
        eyeOff[1].style.display = "block"
        eyeOn[0].style.visibility = "hidden"
        eyeOn[0].style.display = "none"
        eyeOff[0].style.visibility = "visible"
        eyeOff[0].style.display = "block"
    } else{
        pass.type = "password"
        eyeOff[1].style.visibility = "hidden"
        eyeOff[1].style.display = "none"
        eyeOn[1].style.visibility = "visible"
        eyeOn[1].style.display = "block"
        eyeOff[0].style.visibility = "hidden"
        eyeOff[0].style.display = "none"
        eyeOn[0].style.visibility = "visible"
        eyeOn[0].style.display = "block"
    }
}
