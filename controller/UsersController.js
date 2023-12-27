
exports.logincontroller = (req , res ,next) => {
    res.json({
        msg : "Login successfully,message from controller",
        state : 1,
    })
}

exports.registercontroller = (req , res , next) => {
    res.json({
        msg : "registering successfully,message from controller"
    })
}



exports.getAllSalarys = (req , res) => {
    res.json({
        state : 1,
        salarys : [100,50,200,60],
    })
}
