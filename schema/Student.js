const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name : {
        type :String,
    },
    age : {
        type : Number,
    },
    class : {
        type : String , 
    },
});

module.exports = studentSchema;