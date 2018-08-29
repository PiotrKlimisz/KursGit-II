function CustomerRegister(){}

CustomerRegister.register = function register(login, password){
if(!login){
    throw "Login is required";
}
if(!password){
    throw "Password is required"
}
}