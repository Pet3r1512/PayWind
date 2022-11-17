function toggleMode(){
    var toggle = document.getElementById("toggle").checked
    var body = document.getElementById("body")
    var form = document.getElementById("form")
    var email = document.getElementById("email")
    var inputPass = document.getElementById("pass_input")
    var username = document.getElementById("username")
    var passConfirm = document.getElementById("confirm_pass")

    if(toggle == false){
        body.style.backgroundColor = "#181818"
        body.style.transitionDuration ="300ms"
        form.style.backgroundColor="#282828"
        form.style.color = "white"
        form.style.borderColor = "#282828"

        email.style.backgroundColor = "#404040"
        inputPass.style.backgroundColor = "#404040"
        email.style.borderColor = "#282828"
        inputPass.style.borderColor = "#282828"

        if(username && passConfirm){
            username.style.backgroundColor = "#404040"
            passConfirm.style.backgroundColor = "#404040"
            username.style.borderColor = "#282828"
            passConfirm.style.borderColor = "#282828"
        }
    } else {
        body.style.backgroundColor = "#E1E5E8"
        body.style.transitionDuration ="300ms"
        form.style.backgroundColor="#FFFFFF"
        form.style.color = "black"
        form.style.borderColor = "rgb(202, 213, 225)"

        email.style.backgroundColor = "#FFFFFF"
        inputPass.style.backgroundColor = "#FFFFFF"
        email.style.borderColor = "rgb(202, 213, 225)"
        inputPass.style.borderColor = "rgb(202, 213, 225)"

        if(username && passConfirm){
            username.style.backgroundColor = "#FFFFFF"
            passConfirm.style.backgroundColor = "#FFFFFF"
            username.style.borderColor = "rgb(202, 213, 225)"
            passConfirm.style.borderColor = "rgb(202, 213, 225)"
        }
    }
}