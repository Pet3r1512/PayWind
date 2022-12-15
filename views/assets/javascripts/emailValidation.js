async function emailValidation() {
    const email = document.getElementById("email")
    const emailError = document.getElementById("emailError")
    const submit = document.getElementById("submit")

    if(email.value == ""){
        email.style.borderColor = "rgb(148, 163, 184)"
        emailError.style.display = "none"
        submit.disabled = false
        submit.style.backgroundColor = "rgb(99, 102, 241)"
    } else {
        // const dtbLink = `http://paywind.up.railway.app/account/email/isExisted/${email.value}`
        const dtbLink = `http://localhost:3000/account/email/isExisted/${email.value}`
        const res = await (await fetch(dtbLink)).json()

        if(res.isExisted == false && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))){
            emailError.innerHTML = "This email address is available"
            emailError.style.fontSize = "13px"
            email.style.borderColor = "green"
            emailError.style.color = "green"
            emailError.style.display = "block"
            submit.disabled = false
            submit.style.backgroundColor = "rgb(99, 102, 241)"
        } else {
            emailError.style.display = "none"
            submit.disabled = true
            submit.style.backgroundColor = "gray"
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
}