const { Schema, model } = require ('mongoose');

const carSchema = new Schema({
    carBrand: {type: String,
        required:true},
    
    carModel: {type: String,
            required:true},
    
    leasingPrice: Number,
    
    carImage: {
            type: String},
            // required:true},
            
    seatsNumber: {type: Number,
            required:true},
    
    doorNumber: {type: Number,
            required:true},
    
    trunkSize: Number,
    
    co2Emissions: Number,
    
    carType: String,
        
    airConditioner: String,
    
    transmissionType: {type: String,
            required:true},
    
    motorType: {type: String,
            required:true},
    
    availability: String

});

carSchema.index({carBrand: "text"});
module.exports = model('Car', carSchema, 'cars');