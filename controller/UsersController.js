
exports.loginUser = (req ,res) => {
    // res.json({
    //     msg : "this is loginuser function in UserController controller",
    //     state : 1,
    //     data : [],
    //     })

    const username = req.body.username;
    const password = req.body.password;

    if(!username || !password){
        return res.json({
            msg : "please input your data",
            state : 0,
        })
    }

    if(username.trim() === "" || password.trim() === "" ){
        return res.json({
            msg: "username or password is null,please input it",
            state : 0,
        })
    }

    if(username === "abdalbast" && password === "12345678"){
       return res.json({
            msg : "login user successfully",
            state : 1,
        })
    }

    res.json({
        msg : "username or password is wrong",
        state : 0,
    })
    
}


exports.registerUser = (req , res) => {
    // res.json({
    //     msg : "this is registerUser function in UserController controller",
    //     state : 1,
    //     data : [],
    // })
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const phone = req.body.phone;

    if(!username || !password || !email || !phone ){
        return res.json({
            msg : "please input your data",
            state : 0,
        })
    }

    if(username.trim() === "" || password.trim() === "" || email.trim() === "" || phone.trim() === ""){
        return res.json({
            msg: "your data is null , please fill it",
            state : 0,
        })
    }
    
    res.json({
        msg : "register successfully",
        state : 1,
    })
}