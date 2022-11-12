async function isExisted() {
    const email = document.getElementById("email")
    const emailError = document.getElementById("emailError")
    const submit = document.getElementById("submit")

    const res = await (await fetch(`http://localhost:3000/account/email/isExisted/${email.value}`)).json()

    if(res.isExisted == false){
        emailError.innerHTML = "This email address is available"
        emailError.style.fontSize = "13px"
        email.style.borderColor = "green"
        emailError.style.color = "green"
        emailError.style.display = "block"
    }

    if(res.isExisted == true){
        emailError.innerHTML = "This email address already exists."
        email.style.borderColor = "red"
        emailError.style.display = "block"
        emailError.style.fontSize = "13px"
        emailError.style.color = "red"
        submit.disabled = true
        submit.style.backgroundColor = "gray"
    }
}