function toggleMode(){
    var toggle = document.getElementById("toggle").checked
    var body = document.getElementById("body")
    var form = document.getElementById("form")
    var inputName = document.getElementById("input_name")
    var inputPass = document.getElementById("pass_input")

    if(toggle == false){
        body.style.backgroundColor = "#181818"
        body.style.transitionDuration ="300ms"
        form.style.backgroundColor="#282828"
        form.style.color = "white"
        form.style.borderColor = "#282828"

        inputName.style.backgroundColor = "#404040"
        inputPass.style.backgroundColor = "#404040"
        inputName.style.borderColor = "#282828"
        inputPass.style.borderColor = "#282828"
    } else {
        body.style.backgroundColor = "#E1E5E8"
        body.style.transitionDuration ="300ms"
        form.style.backgroundColor="#FFFFFF"
        form.style.color = "black"
        form.style.borderColor = "rgb(202, 213, 225)"

        inputName.style.backgroundColor = "#FFFFFF"
        inputPass.style.backgroundColor = "#FFFFFF"
        inputName.style.borderColor = "rgb(202, 213, 225)"
        inputPass.style.borderColor = "rgb(202, 213, 225)"
    }
}