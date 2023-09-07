const mongoose = require("mongoose");
const issueSchema = new mongoose.Schema({
    //name author label project details
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    labels: [{
        type: String,
        trim: true,
        require: true
    }],
    description: {
        type: String,
        require: true
    }
}, { timestamps: true })



module.exports = mongoose.model('Issue', issueSchema);