function validatePass(){
    let pass = document.forms["entryForm"]["password"].value
    let confirmPass = document.forms["entryForm"]["confirm_password"].value
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/

    if (!regEx.test(pass)){
        alert("Password must contain at least 6 characters, 1 uppercase letter, 1 lowercase letter and 1 number")
        return false
    } else {
        if (confirmPass != pass){
            alert("The confirmation password does not match")
            return false
        }
    }
}