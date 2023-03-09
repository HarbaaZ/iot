const City = require('../models/city');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

// Setting dotenv file
dotenv.config({ path: 'config/.env' })

connectDatabase();

const getCities = catchAsyncErrors(async () => {
    const cities = await City.find();
    console.log(cities);
});

const countCities = catchAsyncErrors(async () => {
    const cities = await City.find();
    console.log(`Count : ${cities.length}`);
});

const getCityByName = catchAsyncErrors(async (cityLabel) => {
    const cities = await City.find({ 'label': cityLabel.toLowerCase() });
    console.log(cities);
});

const getCityByDepartment = catchAsyncErrors(async () => {
    const cities = await City.aggregate([
        { $group: { _id: "$department_number", count: { $sum: 1 } } },
        { $sort: { _id: 1 } },
        { $project: { _id: 0, department_number: "$_id", count: 1 } },
    ])
    console.log(cities);
});

//getCities();
//countCities();
//getCityByName('Marquette lez lille');
getCityByDepartment();