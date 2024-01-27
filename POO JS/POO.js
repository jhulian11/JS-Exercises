
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

        Car.prototype.brake = function(){
            this.speed -= 5;
            this.logSpeed();
        };

        const bmw = new Car('BMW', 110);
        const mercedes = new Car('Mercedes', 100);

        bmw.accelerate();
        mercedes.brake();
    },
    Exercise2(){
        ///////////////////////////////////////
        // Coding Challenge #2

        /* 
        1. Re-create challenge 1, but this time using an ES6 class;
        2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
        3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
        4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

        DATA CAR 1: 'Ford' going at 120 km/h

        GOOD LUCK 😀
        */

        class Car {
            constructor(make, speed){
                this.make = make;
                this.speed = speed;
            };

            logSpeed() {
                console.log(`'${this.make}' going at ${this.speed} km/h`);
            };

            logSpeedUS() {
                console.log(`'${this.make}' going at ${this.speed / 1.6} mi/h`);
            };

            accelerate(){
                this.speed += 10;
                this.logSpeed();
            };
    
            brake(){
                this.speed -= 5;
                this.logSpeed();
            };

            get speedUS(){
                return this.speed/ 1.6;
            };

            set speedUS(speed){
                this.speed = speed * 1.6;
            };
        }

        const ford = new Car("Ford", 120);

        ford.accelerate();
        ford.brake();

        console.log(ford.speed);
        console.log(ford.speedUS);

        ford.speedUS = 10;

        console.log(ford.speed);
        console.log(ford.speedUS);

        ford.logSpeed();
        ford.logSpeedUS();
        
    },
    Exercise3(){
        //////////////////////////////////////
        // Coding Challenge #3

        /* 
        1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
        2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
        3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
        4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

        DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

        GOOD LUCK 😀
        */
    
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

        Car.prototype.brake = function(){
            this.speed -= 5;
            this.logSpeed();
        };

        const EletricCar = function(make,speed,charge){
            Car.call(this,make,speed);
            this.charge = charge;
        }

        EletricCar.prototype = Object.create(Car.prototype);
        EletricCar.prototype.constructor = EletricCar;

        EletricCar.prototype.chargeBattery = function(chargeTo){
            this.charge = chargeTo;
        };

        EletricCar.prototype.logSpeed = function(){
            console.log(`'${this.make}' going at ${this.speed} km/h, with a charge of ${this.charge}%`);
        };

        EletricCar.prototype.accelerate = function(){
            this.speed += 20;
            this.charge -= 1;
            this.logSpeed();
        };

        const tesla = new EletricCar("Tesla", 120, 23)
        tesla.logSpeed();

        tesla.accelerate();
        tesla.brake();
        tesla.chargeBattery(90);

        tesla.logSpeed();

        
    },
    Init(){
        // this.Exercise1();
        // this.Exercise2();
        this.Exercise3();
    }
};

Exercises.Init();

