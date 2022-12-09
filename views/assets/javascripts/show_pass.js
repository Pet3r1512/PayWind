function show_pass() {
    var pass = document.getElementById('pass_input')
    var passConfirm = document.getElementById('confirm_pass')
    var eyeOn = document.getElementsByClassName('eye-on')
    var eyeOff = document.getElementsByClassName('eye-off')
    
    let new_pass = document.getElementById('new_pass_input')
    let confirm_new_pass = document.getElementById('confirm_new_password')

    if (passConfirm) {
        if (passConfirm.type == "password") {
            passConfirm.type = "text"
        } else {
            passConfirm.type = "password"
        }
    }

    if (pass.type == "password") {
        pass.type = "text"
        for (let i = 0; i < eyeOn.length; i++) {
            eyeOn[i].style.visibility = "hidden"
            eyeOn[i].style.display = "none"
            eyeOff[i].style.visibility = "visible"
            eyeOff[i].style.display = "block"
        }
    } else {
        pass.type = "password"
        for (let i = 0; i < eyeOn.length; i++) {
            eyeOff[i].style.visibility = "hidden"
            eyeOff[i].style.display = "none"
            eyeOn[i].style.visibility = "visible"
            eyeOn[i].style.display = "block"
        }
    }
}
