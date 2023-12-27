

exports.addProduct =  (req , res) => {
    const name  = req.body.name;
    const price = req.body.price;
    if(!name || !price){
        return res.json({
            msg : "please input all data of your product",
            state : 0,
        })
    }
    if(name.trim() === "" || price.trim() === ""){
        return res.json ({
            msg : "name or price of product is null, please fill it",
            state : 0,
        })
    }
    res.json({
        msg : "product added successfully",
        state : 1,
        data : [name,price],
    })
}