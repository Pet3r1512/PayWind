async function phoneValidation() {
    const phoneNumber = document.getElementById("phoneNumber")
    const phoneError = document.getElementById("phoneError")
    const submit = document.getElementById("submit")

    if(phoneNumber.value == ""){
        phoneNumber.style.borderColor = "rgb(148, 163, 184)"
        phoneError.style.display = "none"
        submit.disabled = false
        submit.style.backgroundColor = "rgb(99, 102, 241)"
    } else {
        const apiLink = `http://paywind.up.railway.app/account/phone/isExisted/${phoneNumber.value}`
        // const apiLink = `http://localhost:3000/account/phone/isExisted/${phoneNumber.value}`

        const res = await (await fetch(apiLink)).json()

        if(res.isExisted == false && (/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(phoneNumber.value))){
            phoneError.innerHTML = "This phone number is available"
            phoneError.style.fontSize = "13px"
            phoneNumber.style.borderColor = "green"
            phoneError.style.color = "green"
            phoneError.style.display = "block"
            submit.disabled = false
            submit.style.backgroundColor = "rgb(99, 102, 241)"
        } else {
            phoneError.style.display = "none"
            submit.disabled = true
            submit.style.backgroundColor = "gray"
        }

        if(res.isExisted == true){
            phoneError.innerHTML = "This phoneNumber address already exists."
            phoneNumber.style.borderColor = "red"
            phoneError.style.display = "block"
            phoneError.style.fontSize = "13px"
            phoneError.style.color = "red"
            submit.disabled = true
            submit.style.backgroundColor = "gray"
        }
    }
}