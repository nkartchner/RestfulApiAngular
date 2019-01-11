const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/restfullAPI', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () { });

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Title is required"] },
    description: { type: String, default: "" },
    completed: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('tasks', TaskSchema);