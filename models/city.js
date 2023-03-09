const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    insee_code: {
        type: String,
        unique: false,
    },
    city_code: {
        type: String,
    },
    zip_code: {
        type: String,
    },
    label: {
        type: String,
    },
    latitude: {
        type: String,
    },
    longitude: {
        type: String,
    },
    department_name: {
        type: String,
    },
    department_number: {
        type: String,
    },
    region_name: {
        type: String,
    },
    region_geojson_name: {
        type: String,
    },

})

module.exports = mongoose.model('City', citySchema);