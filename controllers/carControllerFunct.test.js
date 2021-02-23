const {createCar, getSingleCar, getAllCars, carUpdate, carDelete} = require('./carControllerFunct');
jest.useFakeTimers();

describe('Car controller operations', function(){
    
    test('createCar is called', function(){
        
        expect(createCar()).toBeTruthy();
        
    });
    
    test('getSingleCar is called', function(){
        
        expect(getSingleCar()).toBeTruthy();

    });

    test('getAllCars is called', function(){
        
        expect(getAllCars()).toBeTruthy();

    });
    test('carUpdate is called', function(){
        
        expect(carUpdate()).toBeTruthy();

    });
    test('carDelete is called', function(){
        
        expect(carDelete()).toBeTruthy();

    });

});