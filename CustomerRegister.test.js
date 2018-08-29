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
    customerRegister.register("sampleLogin", "SampleL0ngP@ssw0rd!!!", "WrongReplyPassword");
    console.log("FAIL: Passwords are not the same")
}
catch(error){
    if(error !== "Passwords are not the same"){
        console.log("FAIL: Expect 'Passwords are not the same'");
    }
}