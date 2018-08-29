function CustomerRegister(){}

CustomerRegister.register = function register(login, password){
var dirtyHardcodedMinPasswordLength = 10;
if(!login){
    throw "Login is required";
}
if(!password){
    throw "Password is required"
}

if(password.length < dirtyHardcodedMinPasswordLength){
    throw "Password length should be at least " + dirtyHardcodedMinPasswordLength;
}
}