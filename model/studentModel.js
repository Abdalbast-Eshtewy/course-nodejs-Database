const mongoose = require('mongoose');
const studentSchema = require('../schema/Student');

const Students = mongoose.model('Students' , studentSchema);

module.exports = Students;