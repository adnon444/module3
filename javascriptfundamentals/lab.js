// PEMDAS - please excuse my dear aunt sally

// 1.
// console.log("" + 1 + 0)
// console.log("" - 1 + 0)
// console.log(true + false)
// console.log(!true)
// console.log(6 / "3")
// console.log("2" * "3")
// console.log(4 + 5 + "px")
// console.log("$" + 4 + 5)
// console.log("4" - 2)
// console.log("4px" - 2)
// console.log("  -9  " + 5)
// console.log("  -9  " - 5)
// console.log(null + 1)
// console.log(undefined + 1)
// console.log(undefined == null)
// console.log(undefined === null)
// console.log(" \t \n" -2)


// 2.
// let three = "3"
// let four = "4"
// let thirty = "30"

//what is the value of the following expressions?

// let addition = three + four
// console.log(addition)
// false

// let multiplication = three * four
// console.log(multiplication)
// true

// let division = three / four
// console.log(division)
// true

// let subtraction = three - four
// console.log(subtraction)
// true

// let lessThan1 = three < four
// console.log(lessThan1)
// true

// let lessThan2 = thirty < four
// console.log(lessThan2)
// wrong

// 3.
// if (0) console.log('#1 zero is true') - Zero is false
// if ("0") console.log('#2 Zero is true') - string makes it true
// if (null) console.log('null is true') - null is false - nothing prints
// if (-1) console.log('negative is true') - non-zero is true
// if (1) console.log('positive is true')


// 4.
// let a=7, b=18
// let result = `${a} + ${b} is`;

// result += (a+b < 10) ? 'less than 10' : 'greater than 10';

// console.log(result)


// 5.

// function getGreeting(name) {
//     return 'Hello ' + name + '!'
// }

//A - Function Expression
// const getGreetingA = function(name) {
//     return 'Hello ' + name + '!' 
// }

//B - Arrow Function Syntax
// const getGreetingB = (name) => 'Hello ' + name +'!'


// console.log(getGreeting('BOB'))
// console.log(getGreetingA('BOB'))
// console.log(getGreetingB('BOB'))


// 6.

// const westley = {
//     name: 'Westley',
//     numFingers: 5
// }

// const rugen = {
//     name: 'Rugen',
//     numFingers: 6
// }

// const inigo = {
//     firstName: 'Inigo' ,
//     lastName: 'Montoya',
//     greeting(person) {
//         let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}.`
//         console.log(greeting + this.getCatchPhrase(person))
//     },
//     getCatchPhrase(person) {
//         return ' Nice to meet you.'
//     },
//     getCatchPhrase: (person) => person.numFingers == 6 ? 
//     'Not nice to meet you' : 'Nice to meet you'
// }

// inigo.greeting(westley)
// inigo.greeting(rugen)


// 7.
// const basketballGame = {
//     score: 0,
//     fouls: 0,
//     halfTimeScore: 0,
//     freeThrow() {
//         this.score++
//         return this
//     },
//     basket() {
//         this.score += 2
//         return this
//     },
//     threePointer() {
//         this.score += 3
//         return this
//     },
//     foul() {
//         this.fouls++
//         return this
//     },
//     halfTime() {
//         console.log('Halftime score is '+this.halfTimeScore+' ('+this.fouls+' fouls).')
//         return this
//     },
//     fullTime() {
//         console.log('Final score is '+this.score+' ('+this.fouls+' fouls).')
//     }
// }

// basketballGame.basket().foul().freeThrow().freeThrow().basket().foul().threePointer().halfTime().fullTime()


// 8.
// const sydney = {
//     name: 'Sydney',
//     population: 5_121_000,
//     state: 'NSW',
//     founded: '26 January 1788',
//     timezone: 'Australia/Sydney'
// }

// const melbourne = {
//     name: 'Melbourne',
//     population: 86_441,
//     state: 'Vic',
//     age: 135,

// }

// function printCityProps(cityObj) {
//     for (cityProp in cityObj) {
//         console.log(cityProp + '=' + cityObj[cityProp])
//     }
// }

// printCityProps(sydney)
// printCityProps(melbourne)


// 9.

// let teamSports = ['Hockey', 'Cricket', 'Volleyball']
// let moreSports = teamSports
// moreSports.push('Basketball')
// moreSports.unshift('Football')


// let dog1 = 'Bingo'
// let dog2 = dog1
// dog2 = 'Lucky'

// let cat1 = {name: 'Fluffy', breed: 'Siberian'}
// let cat2 = cat1
// cat2.name = 'Snuggles'

// console.log(teamSports)
// // console.log(dog1)
// // console.log(cat1)

// let moreSports2 = [...teamSports]
// moreSports.push('pingpong')
// console.log(teamSports)

// let cat3 = {...cat1}
// cat3.name = 'baldy'
// console.log(cat1)


// 10.

// function Person(name, age) {
//     this.name = name
//     this.age = age
//     this.human = true
//     this.canDrive = () => this.age >= 16
// }

// let person1 = new Person('Jon', 30)
// let person2 = new Person('Jane', 25)

// class PersonClass {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//         this.human = true
//     }

//     canDrive() {
//         return this.age >=16
//     }

// }

// let person3 = new Person('Jos', 15)

// console.log(person1)
// console.log(person2)
// console.log(person3)


// if (person1.canDrive()) console.log(person1.name + ' is '+person1.age+' and can drive')
// if (person2.canDrive()) console.log(person2.name + ' is '+person2.age+' and can drive')
// if (person3.canDrive()) console.log(person3.name + ' is '+person3.age+' and can drive')