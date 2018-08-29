if(CustomerRegister){
    console.log("CustomerRegister loaded");
}

var customerRegister = Object.create(CustomerRegister);

try{
    customerRegister.register();
    console.log("FAIL: login is required");
} 
catch(error){
    if(error !== "Login is required"){
        console.log("FAIL: Expect 'Login is required' message");
    }
}