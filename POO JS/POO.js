
const Exercises = {
    Exercise1(){
        const Car = function(make, speed){
            this.make = make;
            this.speed = speed;
        };
        
        Car.prototype.logSpeed = function(){
            console.log(`'${this.make}' going at ${this.speed} km/h`);
        };

        Car.prototype.accelerate = function(){
            this.speed += 10;
            this.logSpeed();
        };

        Car.prototype.break = function(){
            this.speed -= 5;
            this.logSpeed();
        };

        const bmw = new Car('BMW', 110);
        const mercedes = new Car('Mercedes', 100);

        bmw.accelerate();
        mercedes.break();
    },
    Init(){
        this.Exercise1();
    }
};

Exercises.Init();