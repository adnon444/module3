// console.log('hello'); console.log('world');

// console.log('hello')
// console.log('world')

    // line of code 
    // also line of code 
    // another line of code console.log('i am commented out')

// const integer = 234 - integer - whole number
// const float = 12.345 - floating point decimal number

// console.log(1/0) infinity - division by zero
// console.log(-1/0) negative division by zero = -infinity
// console.log("not a number" /1) -invalid mathematical operaion = NaN
// PEMDAS - please excuse my dear aunt sally (parentheses, exponents, multiplication, division, addition, subtraction)

// let one = 1
// let two = 2
// let three = 3

// console.log(one + two - three * two / one);

// const bigint_valid = 1234567890123456789012345n;
// const bigint_invalid = 1234567890123456789012345; //too large for standard integer;

// console.log(bigint_valid == bigint_invalid)

// -strings
// const doubleQuotes = "string that can include 'single quotes'"
// const singleQuotes = 'string that can include "double quotes"'
// const backTicks - `string that can include variables - ${singleQuotes}`


// -Booleans
// let isChecked = false
// let isToggleOn = true

// isChecked = !isChecked
// console.log(isChecked)


// -Null
// let age = null
// console.log(age)


// -Undefined
// let location
// let age = null
// console.log(`${location} == ${age} ? ${location == age}`)
// console.log(`${location} === ${age} ? ${location === age}`)


// -Object
// const tv = {
//     brand: "Sony Bravia", 
//     size: "55-inch",
//     model: "2023",
//     resolution: "4k"
// }


// -data types
// console.log(typeof undefined)
// console.log(typeof 0)
// console.log(typeof 10n)
// console.log(typeof true)
// console.log(typeof 'text')
// console.log(typeof Symbol('id'))
// console.log(typeof Math)
// console.log(typeof null)
// console.log(typeof console.log)



// -String Conversion
// console.log( String(false) ) // false - string form of boolean
// console.log( "1" + 2 + 3 ) // 123 - string '1' is concatenated with number 2 
// console.log( 1 + 2 + "3" ) // 33 - number 1 is added to number 2 then concatenated 


// -Numeric Conversion
// console.log( Number("    4    ")) // 4 - trims spaces
// console.log( Number(null)) // 0 - intentionally empty value converts to 0
// console.log( Number(undefined)) // Nan - non-existent value is unknown
// console.log( Number(false)) // 0 - false converts to 0
// console.log( Number(true)) // 1 - true converts to 1
// console.log( Number("")) // 0 - empty string converts to 0
// console.log( Number("not a number")) // NaN - non-empty strings beginning with with chars cannot convert
// console.log("6" / "2")
// console.log("6" * "2")
// console.log("6" - "2")
// console.log(+"6")


// -boolean conversion
// console.log( Boolean("")) // false - empty string
// console.log( Boolean(0)) // false - zero value
// console.log( Boolean(null)) // false - no value
// console.log( Boolean(undefined)) // false - unknown value
// console.log( Boolean(NaN)) // false - not a number
// console.log( Boolean("false")) // true - non-empty string
// console.log( Boolean(-1)) // true - non-zero number
// if ("") console.log('empty string is true') // implicit "" conversion to false - won't print msg
// if (undefined) console.log('undefined is true') // implicit conversion to false - won't print msg
// console.log( NaN ? 'NaN is true' : 'Nan is false')
// console.log( 0 ? 'zero is true' : 'zero is false')
// console.log( "hello" ? 'hello is true' : 'hello is false')
// console.log( !undefined)
// console.log( !!"")


// function keyword followed by the custom function name, then ()

// function helloWorld()
// {
//     console.log('hello world')    
// }



// -functions - Declaration
// helloWorld()

// function checkAge returns a value when called

// function checkAge(age) {

//     if (age >=18) {
//         return 'adult'; // if the condition is true, return this string and exit
//     }
//     return 'non-adult'; // if the condition was false, return this string and exit
// }

// console.log( checkAge(21))
// console.log( checkAge(13))


// const sayHi = function() {
//     console.log('Hi')
// }
// sayHi()

// sayHiexpression() - wont work before initialization
// sayHiDeclaration() - will work before initialization

// const sayHiexpression = function() {
//     console.log('hi')
// }

// function sayHiDeclaration() {
//     console.log('hi')
// }


// -Functions - Arrow
// const sayHi = () => console.log('hi')

// sayHi()


// -Objects

// -object constructor - not used much
// const user = new Object()

//-Object Literal - More Common
// const user = {}
// const ball = {}
// const car = {}

// // -Object with properties
// const user = {
//     name: 'Joe',
//     age: 20,
//     'has a dog': true
// }


// -Object with operations

// console.log(user.age)
// let dogOwner = user['has a dog']


// user.age = 21
// console.log(user.age)

// user.location = 'NSW'
// console.log(user)

// delete user.location
// console.log(user)


// -Property name limitation
// const object = {
//     2: 'value of numeric property'
//     // '2': 'value of string property'
// }

// console.log(object)

// -Property existence test 
// const phone = {
//     model: 'Iphone 15 pro max',
//     color: 'black',
    
// }
// if (phone.color) console.log(`My ${phone.model} is ${phone.color}`)

// - Iteration
// let goal = 5
// for (let i = 0; i < goal; i++) {
//     console.log(`iteration ${i} of ${goal}`)
// }

// -Object Iteration
// const phone = {
//     model: 'Iphone 15 Pro Max',
//     color: 'black',
//     storage: 512
// }

// for (let key in phone) {
//     console.log('key: ' +key)
//     console.log('value: ' +phone[key])
// }

// -Object references
// let person1 = {name:'Anna'}
// let person2 = person1
// person1.name = 'Brian'
// console.log(person2.name)
// let person3 = 'Carly'
// let person4 = person3
// person3 = 'David'
// console.log(person4)


// -Object shallow copy 
// const user = { name: 'Elliot', age: 27}

// const userClone = {}

// for (let key in user) {
//     userClone[key] = user[key]
// }

// console.log(userClone)

// -Shallow Copy with Object Spread 
// const userClone = {...user}
// console.log(userClone)

// const userClone = {...user, age:28, location: 'New Zealand'}
// console.log(userClone)

// const vehicle = { make: 'Toyota', model: 'Camry'}
// const mergedUser = {...user, ...vehicle}
// console.log(mergedUser)

// -Object Deep Clone

// const box1 = {
//     weight: '20kg',
//     dimensions: {
//         width: '30cm',
//         height: '10cm'
//     }
// }

// const box2 = {...box1}
// box1.dimensions.height = '12cm'
// console.log(box2)


// -Object Method 
// const user = {
//     name: 'Bilbo Baggins',
//     sing: function() {
//         console.log('Roads go ever ever on')
//     },
//     sing2() {
//         console.log('Over rock and under tree')
//     }
//  }
//  user.sing()
//  user.sing2()

// -Object methods with context (had an error with this one)
// const user = {
//     name: 'Bilbo Baggins',
//     age: 24,
//     printGreeting() {
//         console.log(`Hello, I'm ${this.name}`)
//     }
// }

// user.printGreeting()


// -Object Contructor Function 
function User(first, last) {
    this.first = first;
    this.last = last;
    this.hasShortName = () => this.first.length <= 3;
}

let user1 = new User('Tim', 'Smith')
console.log(user1)
console.log(user1.hasShortName())

let user2 = new User('new4', 'user4')
console.log(user2)
console.log(user2.hasShortName())