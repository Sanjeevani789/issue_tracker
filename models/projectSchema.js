const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
    //name author label project details
    name: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    labels: [{
        type: String,
        trim: true
    }],
    description: {
        type: String,
        require: true
    },
    issues: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issue'
    }]
}, { timestamps: true })



module.exports = mongoose.model('project', projectSchema);