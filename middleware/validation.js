exports.loginFields = (req , res , next) => {
     
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body.username)  
    if(!username || !password){
        return
        res.json({
        msg : "please input all fields",
        state : 0,
    })
    }
    if(username.trim() === "" || password.trim() === ""){
        return
        res.json({
            msg : "fields is null , please fill it",
            state : 0,
        })
    }
    next();

}


exports.registerFields = (req , res , next) => {
        
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const phone = req.body.phone;
    
    if(!username || !password || !email || !phone ){
        return res.json({
            msg : "please input all your data",
            state : 0,
        })
    }
    
    if(username.trim() === "" || password.trim() === "" || email.trim() === "" || phone.trim() === ""){
        return res.json({
            msg: "your data is null , please fill it",
            state : 0,
        })
    }
     
    next();
    
}
 