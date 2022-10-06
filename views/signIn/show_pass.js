function show_pass(){
    var pass = document.getElementById('passInput')
    var icon = document.getElementById('passIcon')

    if(pass.type == "password"){
        pass.type = "text"
    } else{
        pass.type = "password"
    }
}