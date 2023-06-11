const mongoose = require("mongoose");

const sauceSchema = mongoose.Schema({
    id: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthDate: { type: String, required: true },
    startDate: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: Number, required: true },
    department: { type: String, required: true },

});

export default mongoose.model('Sauce', sauceSchema);