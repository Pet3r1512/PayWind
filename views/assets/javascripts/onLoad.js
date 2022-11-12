function onLoad(){
    const emailError = document.getElementById("emailError")
    const submit = document.getElementById("submit")

    emailError.style.display = "none"
    submit.disabled = false
    submit.style.backgroundColor = "rgb(67, 56, 202)"
}