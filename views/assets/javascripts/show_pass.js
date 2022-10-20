function show_pass() {
    var pass = document.getElementById('passInput')
    var eyeOn = document.getElementById('eye-on')
    var eyeOff = document.getElementById('eye-off')

    if (pass.type == "password") {
        pass.type = "text"
        eyeOn.style.visibility = "hidden"
        eyeOn.style.display = "none"
        eyeOff.style.visibility = "visible"
        eyeOff.style.display = "block"
    } else {
        pass.type = "password"
        eyeOff.style.visibility = "hidden"
        eyeOff.style.display = "none"
        eyeOn.style.visibility = "visible"
        eyeOn.style.display = "block"
    }

}