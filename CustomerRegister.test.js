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
    console.log("FAIL: Password lenght should be at least 9");
}
catch(error){
    if(error !== "Password lenght should be at least 9"){
        console.log("FAIL: Expect 'Password lenght should be at least 9'");
    }
}