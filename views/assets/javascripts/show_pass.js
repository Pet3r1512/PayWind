function show_pass() {
    var passInput = document.getElementById('pass_input')
    var passConfirm = document.getElementById('confirm_pass')
    var passOld = document.getElementById('old_password')
    var pass = document.getElementById("pass")
    var eyeOn = document.getElementsByClassName('eye-on')
    var eyeOff = document.getElementsByClassName('eye-off')

    if(pass){
        if(pass.type == "password"){
            pass.type = "text"

            for (let i = 0; i < eyeOn.length; i++) {
                eyeOn[i].style.visibility = "hidden"
                eyeOn[i].style.display = "none"
                eyeOff[i].style.visibility = "visible"
                eyeOff[i].style.display = "block"
            }
        }

        else {
            pass.type = "password"

            for (let i = 0; i < eyeOn.length; i++) {
                eyeOff[i].style.visibility = "hidden"
                eyeOff[i].style.display = "none"
                eyeOn[i].style.visibility = "visible"
                eyeOn[i].style.display = "block"
            }
        }
    }

    if(passInput && passConfirm){
        if ((passInput.type == "password" && passConfirm.type == "password")) {
            passInput.type = "text"
            passConfirm.type = "text"
            passOld.type = "text"

            for (let i = 0; i < eyeOn.length; i++) {
                eyeOn[i].style.visibility = "hidden"
                eyeOn[i].style.display = "none"
                eyeOff[i].style.visibility = "visible"
                eyeOff[i].style.display = "block"
            }
        } else {
            passInput.type = "password"
            passConfirm.type = "password"
            passOld.type = "password"
            pass.type = "password"

            for (let i = 0; i < eyeOn.length; i++) {
                eyeOff[i].style.visibility = "hidden"
                eyeOff[i].style.display = "none"
                eyeOn[i].style.visibility = "visible"
                eyeOn[i].style.display = "block"
            }
        }
    }

}
