'use strict'

const Car = require('../models/Car');

function createCar(param){
    return new Car(param).save();
}

function getSingleCar(id){
   return Car.findById(id).lean();    
}

function getAllCars(){
    return Car.find().lean();
}

function carUpdate(id,updatedInfo){
    return Car.findByIdAndUpdate(id, updatedInfo);
}

function carDelete(id){
    return Car.findByIdAndDelete(id);
}

function carSearch(text){
    return Car.find(text).lean();
}

module.exports = {createCar, getSingleCar, getAllCars, carUpdate, carDelete, carSearch};