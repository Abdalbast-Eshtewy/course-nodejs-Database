
exports.checkUser = (req , res , next) => {
    if(req.body.username === "abdalbast" && req.body.password === "12345678"){
        next();
        return
    }
    res.json({
        msg : "ERROR",
        state : 0,
    })
}