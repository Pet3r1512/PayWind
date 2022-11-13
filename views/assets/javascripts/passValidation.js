function passValidation(){
    const passInput = document.getElementById("pass_input")
    const confirm_pass = document.getElementById("confirm_pass")
    const pass_valid = document.getElementById("pass_valid")
    const submit = document.getElementById("submit")

    if(confirm_pass == ""){
        confirm_pass.style.borderColor = "rgb(148, 163, 184)"
        pass_valid.style.display = "none"
        submit.disabled = false
        submit.style.backgroundColor = "rgb(99, 102, 241)"
    }

    if(confirm_pass.value == passInput.value){
        confirm_pass.style.borderColor = "green"
        pass_valid.style.display = "none"
        submit.disabled = false
        submit.style.backgroundColor = "rgb(99, 102, 241)"
    } else {
        confirm_pass.style.borderColor = "red"
        pass_valid.innerHTML = "The password confirmation does not match"
        pass_valid.style.display = "block"
        pass_valid.style.fontSize = "13px"
        pass_valid.style.color = "red"
        submit.disabled = true
        submit.style.backgroundColor = "gray"
    }
}