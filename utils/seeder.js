const City = require('../models/city');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const cities = require('../data/cities.json');

// Setting dotenv file
dotenv.config({ path: 'config/.env' })

connectDatabase();

const seedCities = async () => {
    try {

        await City.deleteMany();
        console.log('Cities are deleted');

        await City.insertMany(cities.cities)
        console.log('All cities are added.')

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedProducts()