const studentModel = require('../model/studentModel')

// exports.logincontroller = (req , res ,next) => {
//     res.json({
//         msg : "Login successfully,message from controller",
//         state : 1,
//     })
// }
// exports.registercontroller = (req , res , next) => {
//     res.json({
//         msg : "registering successfully,message from controller"
//     })
// }
// exports.getAllSalarys = (req , res) => {
//     res.json({
//         state : 1,
//         salarys : [100,50,200,60],
//     })
// }



exports.create = async  (req ,res) => {
    const name = req.body.name;
    const age = req.body.age;
    if(!name || !age){
        return res.json({
            msg : "please input All your Data",
            state  : 0 ,        
        })
    }
    if(name.trim() === "" || age.trim === ""){
        return res.json({
            msg : "Your data is null,please fiill it",
            state  : 0 ,        
        })
    }
    await studentModel.create({
        name : name,
        age : age,
    }).then((student) => {
        console.log("student created successfully");
        res.json({
            msg : "student created done",
            state : 1,
            data : student,
        })
    }).catch((err) => {
        console.log(err)
    })
}

exports.findOne =async (req ,res) => {
    await studentModel.findOne({name : req.params.name }).then( (student) => {
        if(student === null){
            return res.json({
                msg : "Student not found",
                state : 1,
            })
        }
        res.json({
            msg : "Student founded successfully",
            state : 1,
            data :  student,
        })
    }).catch((err) => {
        console.log(err);
        res.json({
            msg  : "internal error",
            state :0,
        })
    })
}



exports.find =  async (req ,res) => {
    await studentModel.find({}).then((student)=>{
        res.json({
            msg : "there is all Students",
            state : 1,
            data : student,
        })
    }).catch((err)=>{
        console.log(err);
        res.json({
            msg : "internal error",
            state : 0,
        })
    })
}