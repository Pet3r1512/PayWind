function passRegEx(){
    const passInput = document.getElementById("pass_input")
    const pass_regEx = document.getElementById("pass_regEx")
    const submit = document.getElementById("submit")

    if(passInput.value == ""){
        passInput.style.borderColor = "rgb(148, 163, 184)"
        pass_regEx.style.display = "none"
        submit.disabled = false
        submit.style.backgroundColor = "rgb(99, 102, 241)"
    }

    if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(passInput.value)){
        passInput.style.borderColor = "green"
        pass_regEx.style.display = "none"
        submit.disabled = false
        submit.style.backgroundColor = "rgb(99, 102, 241)"
    } else {
        passInput.style.borderColor = "red"
        pass_regEx.innerHTML = "Password must contain at least 6 characters, 1 uppercase letter, 1 lowercase letter and 1 number"
        pass_regEx.style.display = "block"
        pass_regEx.style.fontSize = "13px"
        pass_regEx.style.color = "red"
        submit.disabled = true
        submit.style.backgroundColor = "gray"
    }
}