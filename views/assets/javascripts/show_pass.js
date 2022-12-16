function show_pass() {
    var pass = document.getElementById('pass')
    var eyeOn = document.getElementsByClassName('eye-on')
    var eyeOff = document.getElementsByClassName('eye-off')

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
