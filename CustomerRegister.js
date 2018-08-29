function CustomerRegister(){}

CustomerRegister.register = function register(login, password, replyPassword){
if(!login){
    throw "Login is required";
}
if(!password){
    throw "Password is required";
}

if(password !== replyPassword){
    throw "Passwords are not the same";
}
}