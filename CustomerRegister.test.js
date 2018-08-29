if(CustomerRegister){
    console.log("CustomerRegister loaded");
}

var customerRegister = Object.create(CustomerRegister);


try {
    customerRegister.register();
    console.log("FAIL: login is required");
} 
catch(error){
    if(error !== "Login is required"){
        console.log("FAIL: Expect 'Login is required' message");
    }
}

try {
    customerRegister.register("sampleLogin", "");
    console.log("FAIL: password is required")
}
catch(error){
    if(error !== "Password is required"){
        console.log("FAIL: Expect 'Password is required'");
    }
}

try {
    customerRegister.register("sampleLogin", "shortPass");
    console.log("FAIL: Password length should be at least 10");
}
catch(error){
    if(error !== "Password length should be at least 10"){
        console.log("FAIL: Expect 'Password length should be at least 10'", error);
    }
}