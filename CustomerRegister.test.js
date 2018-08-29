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
    customElements.register("sampleLogin", "");
    console.log("FAIL: password is required")
}
catch(error){
    if(error !== "Password is required"){
        console.log("FAIL: Expect 'Password is required'");
    }
}