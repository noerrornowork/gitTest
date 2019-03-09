const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
   type: {
       type: String,
       required: true
   },
    income: {
        type: String,
        required: true
    },
    expense: {
        type: String,
        required: true
    },
    cash: {
        type: String,
        required: true
    },
    remark: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);