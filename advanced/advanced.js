// - Variable Scope


// let globalVariableCat = 'cat';
// function myFunction() {
// let localVariableDog = 'dog'
// return 'global function with local scope variable '+localVariableDog;
// }
// console.log(localVariableDog) // ReferenceError: localVariableDog is not defined
// globalEnvironment = {
// environmentRecord: {
// globalVariableCat: 'cat', // has no access to localVariableDog
// myFunction: <reference to function object>,
// }
// outer: null // there is no parent environment here
// }
// localMyFunctionEnvironment = {
// environmentRecord: {
// localVariableDog: 'dog'
// },
// outer: globalEnvironment // can still access everything in global
// }


// - Variable Scope - Closures

// function makeAdder(x) {
//     return function adder(y) {
//         return x + y; 

//     };

// }

// const add5 = makeAdder(5);
// console.log( add5(10) )


// function makeHeading(hTag) {
//     return function(title) {
//         return `<${hTag}${title}</${hTag}`
//     }
// }

// const getH1 = makeHeading('h1')
// const getH2 = makeHeading('h2')

// console.log( getH1('heading 1'))
// console.log( getH2('heading 2'))

// -Function Object

// function sayHiDefn() { console.log('Hi (function definition)')}
// const sayHiExpn = function() {console.log('Hi (function expression')}
// const sayHiArrow = () => console.log('Hi (arrow function')

// console.log(sayHiDefn.name)
// console.log(sayHiExpn.name)
// console.log(sayHiArrow.name)

// function oneParam(a) {
//     console.log('This function has a single parameter:' +a)

// }

// function twoParams(a, b) {
//     console.log(`This function has two parameters: ${a} and ${b}`)
// }

// function manyParams(a, b, ...extras) {
//     console.log(`This function has unlimited parameters: ${a} and ${b} and ${extras}`)
// }

// console.log(oneParam.length)
// console.log(twoParams.length)
// console.log(manyParams.length)


// Custom Properties

// function sayHi() {
//     console.log('Hi');
//     sayHi.counter++
// }

// sayHi.counter = 0

// sayHi()
// sayHi()
// console.log( `Called ${sayHi.name} ${sayHi.counter} times`)


// Scheduling - setTimeout


// function printMessage(msg) {
//     console.log(`Message: ${msg}`)
// }

// let timerId = setTimeout(printMessage, 3000, 'prints after 3 sec')

// let cancelledTimer = setTimeout(printMessage, 1000, 'Timeout cancelled so never prints')
// clearTimeout(cancelledTimer)

// setTimeout( () => console.log("log statement inside arrow function"), 500)

// setTimeout ( () => console.log("first message"), 5000 );
// setTimeout ( () => console.log("second message"), 3000 );
// setTimeout ( () => console.log("third message"), 1000 );
// setTimeout ( () => console.log("fourth message"), 0 );

// console.log("fifth message");


// let tick = setInterval( () => console.log('tick'), 1000)
// setTimeout( () => clearInterval(tick), 10*1000) 


// function repeatInterval(delay, limit)
// {
// let counter = 8;

// let intervalTimer = setInterval(function repeatThis() {
//     console.log('repeatInterval: repeated '+counter+' of '+limit+' times')
//     if (counter == limit) clearInterval(intervalTimer)
//     counter++
// },delay)
// }

// repeatInterval(2000, 10)


// - Scheduling - setTimeout

// function repeatTimeout(delay, limit)
// {
//     let counter = 1;
//     setTimeout(function repeatThis(current){
//         console.log('repeatTimeout: repeated ' +current+ ' of ' +limit+ ' times ')
//         if(current < limit) setTimeout(repeatThis, delay, current+1)
//     },delay,counter)
// }

// repeatTimeout(2000, 10)


// - Decorators and Forwarding - Adding Logging/Timing Information

// function printGreeting(name) {
//     console.log('Hello, ' + name)
// }
// printGreeting('Undecorated')

// function loggingTimingDecorator(originalFuntion) {
//     return function (name) {
//         console.time('Function timer');
//         console.log(`\nExecuting function ...`)
//         const result = originalFuntion(name)
//         console.timeEnd('Function timer')
//         return result
//     }
// }

// const decoratedPrintGreeting = loggingTimingDecorator(printGreeting)
// decoratedPrintGreeting('Decorated')


// function slow(x) {
//     let random = 0, goal = Math.floor(Math.random() * x * 1_000_000)
//     console.log(`slow(${x}): randomly generated goal for ${x * 1_000_000} is ${goal}`)
//     for (let i = 0; i < goal; i++) random++
//     return random
// }

// function cachingDecorator(originalFunction) {
//     const cache = new Map()

//     return function(x) {
//         if(cache.has(x)) {
//             console.log('returned cached value for ' + x); return cache.get(x)
//     }
//         let result = originalFunction(x)
//         cache.set(x, result)
//         return result
//     }
// }

// const fast = cachingDecorator(slow)
// const fastTimed = loggingTimingDecorator(fast)
// fastTimed(8)
// fastTimed(8)

// function loggingTimeDecorator(originalFunction) {
//     return function () {
//         console.log('Function Timer');
//         console.log(`\nExecuting Function...`)
//         // const result = originalFunction.call(this, ...arguments)
//         const result = originalFunction.apply(this, arguments)
//         console.log(arguments)
//         console.timeEnd('Function Timer')
//         return results;
//     }
// }

// loggingTimeDecorator(5)


// let worker = {
//     getMultiplier() {
//         return Math.floor(Math.random()) * 1_000_000
//     },


//     slow(x) {
//         let random = 0, goal = x * this.getMultiplier();
//         for (let i = 0; i < goal; i++) random++
//         console.log(`worker.slow${x}: randomly generated goal is ${goal}`)
//         return random 
//     }
// }

// worker.slow(5)
// worker.fast = cachingDecorator(worker.slow)
// worker.fast(3) - Does not work - on purpose


// function isOdd(number) { return number % 2}

// function getOddNumbers() {
//     return [].filter.call(arguments, isOdd)
// }

// let results = getOddNumbers(10, 1, 3, 4, 8, 9)
// console.log(results)

// function Product(name, price) {
//     this.name = name
//     this.price = price
//     this.salePrice  = price * .9 
// }

// function Food(name, price) {
//     Product.call(this, name, price)
//     this.category = 'food'
// }

// const cheese = new Food('cheese', 5)
// console.log(`${cheese.name} is a ${cheese.category} and costs ${cheese.price} ($${cheese.salePrice} on sale)`)


// const user = {
//     name: 'John',
//     sayHi() {
//         console.log(`Hi, ${this.name}`)
//     }
// }

// user.sayHi()
// setTimeout(user.sayHi, 1000)


// const user = {
// name: 'John',
// sayHi() {
//     console.log(`Hi, ${this.name}`)
// }
// }

// setTimeout( function() { user.sayHi(); }, 1000)
// setTimeout( () => user.sayHi(), 1000)



// const user = {
//     name: 'John',
//     sayHi() {
//         console.log(`Hi, ${this.name}`)
//     }
//     }

//     const boundSayHi = user.sayHi.bind(user)
//     setTimeout ( boundSayHi, 1000)


    let animal = { eats: true, sleeps: true, legs: 4, mamal: true }
    let animalPrototype = Object.getPrototypeOf(animal)

    // console.log(animalPrototype)

    // console.log(Object.getOwnPropertyNames(animalPrototype))

    let rabbit1 = { jumps: true}
    Object.setPrototypeOf(rabbit1, animal)

    let rabbit2 = Object.create(animal, {
        jumps: {
            value: true,
            enumerable: true
        }
    })

    // console.log(rabbit1, rabbit2)
    // console.log(rabbit1.legs, rabbit2.legs)

    // for (let prop in rabbit1) console.log(`${prop} is ${rabbit1[prop]}`)
    // for (let prop in rabbit2) console.log(`${prop} is ${rabbit2[prop]}`)

    // function Rabbit(name) {
    //     this.jumps = true;
    //     this.name = name;
    // }

    // Rabbit.prototype = animal

    // let whiteRabbit = new Rabbit('White Rabbit')
    // console.log(whiteRabbit)
    // for(let prop in whiteRabbit) console.log(` ${prop} is ${whiteRabbit[prop]}`)

    // const obj = {}
    // console.log(Object.getPrototypeOf(obj) === Object.prototype)
    // console.log( Object.getOwnPropertyNames(Object.getPrototypeOf(obj)))

    // String.prototype.show = function() {
    //     console.log(this);
    // };
    // "BOOM!".show()

    // if (!String.prototype.repeat) {
    //     String.prototype.repeat = function(n) {
    //         return new Array(n).join(this);
    //     };
    // }
    // console.log( "La".repeat(3) );

    // const obj = {
    //     0: "Hello",
    //     1: "world",
    //     length: 2,
    // };
    // obj.join = Array.prototype.join;
    // Object.prototype.join = Array.prototype.join;

    // console.log(obj.join(','));


    // class ExampleClass {
    //     prop1 = 'value1'
    //     prop2 = 'value2'

    //     constructor() {

    //     }

    //     method1() {

    //     }
    // }

//     class Animal {
//         constructor(name) {
//             this.speed = 0; this.name = name;

//         }
    

//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name} runs with speed ${this.speed} MPH`)
//     }
//     stop() {
//         this.speed = 0
//         console.log(`${this.name} stands still.`)
//     }
// }

// class Rabbit extends Animal {
//     hide() {
//         console.log(`${this.name} hides`)
//     }
// }

//     let bunny = new Rabbit('bunny')

//     bunny.run(9)
//     bunny.hide()


    // class Rabbit extends Animal {
    //     stop() {
    //         super.stop()
    //         this.hide()
    //  }
    //     hide() {
    //         console.log(`${this.name} hides`);

    //     }
    // }

    // let bunny = new Rabbit('bunny');

    // bunny.run(9)
    // bunny.stop();


    // class Rabbit extends Animal {
    //     constructor(name, earLength)
    //     {
    //     super(name); 
    //     this.earLength = earLength; 
    //     }
    //     stop() { 
    //     super.stop(); 
    //     this.hide(); 
    //     }
    //     hide() { 
    //     console.log(`${this.name} hides!`);
    //     }

    // }

    //     let bunny = new Rabbit('bunny', 8); 
    //     console.log( bunny.earLength )



    // class Animal {
    //     type = 'animal';
    //     constructor(name) {
    //     this.speed = 0;
    //     this.name = name;
    //     }
    //     describe() {
    //     console.log(`${this.name} is a ${this.type}`)
    // }
       

    // }
    //     class Rabbit extends Animal {
    //     type = 'rabbit';
       

    // }
    //     new Rabbit('bunny').describe() 
    //     new Animal('fuzzy wuzzy').describe() 


    // class Person {
    //     static latin = 'persona'; 
    //     constructor(name) {
    //     this.name = name; 
    //     }
    //     getName() { 
    //     return this.name;
    //     }
    //     static createAnonymous() { 
    //     return new Person("Unnamed Person");
    //     }
    // }
    //     let jonas = new Person('Jonas')
    //     console.log( jonas.getName() ) 
    //     console.log( jonas.latin ) 
    //     console.log( Person.latin ) 
    //     let anon = Person.createAnonymous() 


    // class Laptop {
    //     _hardDiskType = '500GB SSD'; 
    //     constructor(brand) {
    //     this.brand = brand;
    //     }
    //     getHDiskType() { return this._hardDiskType; }
    // }
    //     const macbook = new Laptop('Apple');
    //     const windows = new Laptop('Windows')
    //     console.log(macbook.brand)
    //     console.log(windows.brand)
    //     console.log(macbook._hardDiskType)
    //     console.log(macbook.getHDiskType())


    // class Laptop {
    //     _hardDiskType = 'HDD'; 
    //     #numCPUFans = 1; 
    //     constructor(brand) { 
    //         this.brand = brand; 
    //     }
    //     isGaming() { return false; } 
    //     getHDiskType() { return this._hardDiskType; } 
    //     _increaseCPUFans() {
    //         if (this.isGaming()) this.#numCPUFans++ 
    //     }
    // }
        // const macbook = new Laptop('Macbook Pro');
        // console.log(macbook.#numCPUFans) 

        // class GamingLaptop extends Laptop {
        //     constructor(brand) {
        //         super(brand); 
        //         this._hardDiskType = 'SSD'; 
        //         // this.#numCPUFans = 2; 
        //         this._increaseCPUFans(); 
        // }   
        //     isGaming() { return true; } 
        // }
        // const alienware = new GamingLaptop('Alienware');
        //console.log(alienware.#numCPUFans)
        // console.log(alienware._hardDiskType)
        // console.log(alienware.getHDiskType())

        // try {
        //     const error = "mismatched quotes"
        // } catch (error) {
        //     console.log('will not catch above error')
        // }


        // try {
        //     noSuchVariable
        // }   catch (error) {
        // }

        // console.log('even though an error occurred above, it was caught so code continues');


        // try {
        //     setTimeout( () => noSuchVariable, 1000 );
        // } catch (e) { 
        // }
        // console.log('prints synchronous code then throws uncaught asynchronous error after 1 sec');


        // function checkJson(json) { 
        //     try {
        //         const user = JSON.parse(json); 
        //     if (!user.name) {
        //     throw new SyntaxError("Incomplete data: no name");
        //     }
        //     return true; 
        //     } catch (e) {
        //         if (e instanceof SyntaxError) {
        //             console.log( "JSON Error: " + e.message );
        //         } else {
        //             throw e;
        //         }
        //     }
        //     return false; 

        // }



        // function checkJson(json) { 
        //     try {
        //         const user = JSON.parse(json); 
        //     if (!user.name) {
        //     throw new SyntaxError("not completed data: no name");
        //     }
        //     return true; 
        //     } catch (e) {
        //         if (e instanceof SyntaxError) {
        //             console.log( "JSON Error: " + e.message );
        //         } else {
        //             throw e;
        //         }
        //     }
        //     return false; 

        // }
        // finally {
        //     console.log('at the end')
        // }
    
    
        // const validJson = '{"name": "bob"}'
        // const invalidJson = '{"age": 31}'

        // console.log(checkJson(validJson))
        // console.log(checkJson(invalidJson))


        // promise.then( (result) => console.log(result),
        //     (error) => console.error(error) )

        // promise.then( (result) => console.log(result ))
        // .catch( (error) => console.error(error) )

        // promise
        // .finally( () => console.log('promise is settled') )
        // .then( (result) => console.log(result) )
        // .catch( (error) => console.error(error) )


        
    // const promise = new Promise((resolve, reject) => {
    //     if (Math.random() > 0.5) setTimeout( () => resolve('Random number ok'), 250 )
    //     else setTimeout( () => reject('Random number too low'), 250 )
    // })
    // promise
    //     .finally( () => console.log('Wait is over, promise has settled.') )
    //     .then( (result) => console.log('Success! ' + result ) )
    //     .catch( (error) => console.log('Error! ' + error ) )


//     let start = 10;
//     new Promise((resolve, reject) => {
//         resolve(start); // resolve promise successfully with value of 10
// }).then((result) => { // when resolve is called, it triggers .then()
//     console.log(result); return result + start; // values returned from .then() are also promises
// }).then((result) => { // so we can chain them together
//     console.log(result); return result + start; // increasing result by 10 each time
// }).then((result) => { // we can continue to chain them together
//     console.log(result); return result + start; // increasing result by 10 each time
// });
// prints 10, 20, 30



// let start = 10;
// new Promise( resolve => setTimeout(() => resolve(start), start * 10)
// ).then(result => { // promise handler function inside .then()
//     console.log(result); let next = result + start;
//     return new Promise( resolve => setTimeout(() => resolve(next), next * 10) );
// }).then(result => { // can explicitly return new promises
//     console.log(result); let next = result + start;
//     return new Promise( resolve => setTimeout(() => resolve(next), next * 10) );
// }).then(result => { // which use the results of previously resolved promises in the chain
//     console.log(result); let next = result + start;
//     return new Promise( resolve => setTimeout(() => resolve(next), next * 10) );
// });
// prints 10, 20, 30, but with 100, 200 and 300ms delays in between


// const promise = new Promise((resolve) => {
//         setTimeout( () => resolve('Simple successful promise'), 2000 )
//     });
   
//     promise.then((msg) => console.log(msg));

//     (async () => {

//     let msg = await promise;
//     console.log(msg);

//     }) ()


function preparePizza() {
    console.log('Started preparing the pizza')
}

function makeBase() {
    console.log('Made the base')
}

function sauce() {
    console.log('Added the sauce and cheese')
}

function addToppings() {
    console.log('Added toppings')
}

function cookPizza() {
    console.log('Cooked the Pizza')
}

preparePizza()
makeBase()
sauce()
addToppings()
cookPizza()

function makePizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Pizza is ready')
            resolve()
        },4000)
        
    })
}

makePizza()