// primitives as objects - numbers
// const n =1.23456

// console.log(n.toFixed(5))
// console.log(n.toPrecision(10))

// primitives as objects - strings
// const hello = 'hello world'
// console.log(hello.toLocaleUpperCase())
// console.log(hello.endsWith('world'))


// primitives - like Object - String like Object
// const user = {
//     name: 'John';    
// }

// console.log("user: " + user)

// const user = {
//     name: 'John',
//     toString() {
//         return this.name
//     }
// }
// console.log("User: " + user2)


// primitive like object - Number like object
// const apple = {
//     name: 'Apple',
//     category: 'Honey Crisp',
//     price: 1.2,
//     valueOf() {
//         return this.price
//     }
// }

// console.log(apple *2)


// Numbers - Decimal Numbers
// const billion1 = 1000000000
// const billion2 = 1_000_000_000

// const billion3 = 1e9

// console.log(billion1 === billion2)
// console.log(billion2 === billion3)
// console.log(billion1 === billion3)


// Numbers - Decimal Numbers - Very Small Numbers

// const microSecs1 = 0.000001

// const microSecs2 = 0.000_001

// const microSecs3 = 1.e-6

// console.log(microSecs1 === microSecs2)
// console.log(microSecs2 === microSecs3)


// Numbers - Hexadecimal Numbers

// const r = 0xff 
// const g = 0xff 
// const b = 0xff 

// const white = `rgb(${r}, ${g}, ${b})`
// console.log(white)


// Numbers - Binary and Octal Numbers
// const mobile = 041234567
// console.log(mobile)

// const binary = 0b11111111
// const octal = 0o377

// console.log(binary)
// console.log(binary === octal)


// Numbers - Base Conversion

// const ff = 255
// const ee = 238
// const dd = 221
// console.log(ff.toString(16))

// console.log(`#${ff.toString(16)}${ee.toString(16)}${dd.toString(16)}`)


// Numbers - Imprecise Calculations

// const toobig = 1e350

// console.log(toobig)
// console.log(Number.MAX_VALUE)

// const point1 = 0.1; const point2 = 0.2
// console.log(`${point1} + ${point2} = ${point1} + ${point2}`)

// console.log(9_999_999_999_999_999)
// console.log(Number.MAX_SAFE_INTEGER)

// console.log(isNaN(NaN))
// console.log(NaN === NaN)


// Numbers - Tests: isFinite and isNaN
// console.log(isFinite(1/3))
// console.log(isFinite("string"))
// console.log(isFinite(Infinity))


// Numbers - parseInt and ParseFloat
// console.log( + "100px")

// console.log( parseInt("150px"))
// console.log( parseInt("2.5em"))
// console.log( parseInt("12.34.56"))
// console.log( parseInt("a123"))


// Strings

// const guestlist = `Guests: \n\t - John \n\t\ - Pete \n\t\ - Mary`
// console.log(guestlist)


// Compare strings

// console.log( 'Z'.codePointAt(0))

// console.log( String.fromCodePoint(90))


// Manipulating Strings

// const string = 'I could be anything you like'

// console.log(string.length)
// console.log(string.indexOf('anything'))
// console.log(string.substring(20))
// console.log(string.toUpperCase())
// console.log(string + ' plus more')

// const sentence = 'The quick brown fox jumps over the lazy dog.'

// // console.log(sentence.startsWith('The'))
// // console.log(sentence.endsWith('dog.'))
// // console.log(sentence.split(' '))
// // console.log(sentence.slice(4, 10))
// // console.log(sentence.replace('quick', 'slow'))
// console.log("   extra spaces    ".trim())


// Arrays

// const arr1 = new Array(1,2,3) - not used often
// const arr2 = [1,2,3] - used more common

// console.log(arr1)
// console.log(arr2)


// Methods that work with the end of the array

// const fruits = ['Apple', 'Orange', 'Pear']
// const lastFruit = fruits.pop()
// console.log(lastFruit)
// console.log(fruits)

// fruits.push('banana')
// console.log(fruits)

// Arrays - Methods that work with the beginning of the array

// const fruits = ['Apple', 'Orange', 'Pear']
// const firstFruit = fruits.shift()

// console.log(firstFruit)
// console.log(fruits)

// fruits.unshift('banana')
// console.log(fruits)

// const fruits1 = ['Apple', 'Orange', 'Pear']
// const fruits2 = fruits1

// fruits1.push('Banana')
// console.log(fruits2)

// console.log('fruit at index 0: ' + fruits1[0])
// console.log('fruit at index 1: ' + fruits1[1])



// Arrays - Multidimensional Arrays

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]

// ]

// console.log(matrix[1][1])


// const numbers = [1, 2, 3]
// const strings = ["one", "two", "three"]
// const empty = []

// console.log('Numbers: ' + numbers)
// console.log('Strings: ' + strings)
// console.log('Empty' + empty)


// const sliceArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
// const sliced = sliceArray.slice(0, 3)
// const endSliced = sliceArray.slice(-3)

// console.log(sliced)
// console.log(sliceArray)
// console.log(endSliced)


// const spliceArray = ["I", "study", "JavaScript", "right", "now"]
// const removed = spliceArray.splice(0, 3, "Let's", "dance")

// console.log(spliceArray)


// Arrays - concat

// const array1 = [1, 2, 3]
// const array2 = [4, 5, 6]
// const array3 = [7, 8, 9]

// const combined = array1.concat(array2, array3)
// console.log(combined)
// console.log(combined.concat(10,11))


// Arrays - indexOf Method

// const marks = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-']

// let bIndex = marks.indexOf('B-')
// let eIndex = marks.indexOf('E')

// console.log(marks[bIndex] + 'is at index: ' + bIndex )
// console.log(eIndex)


// Array - lastIndexOf Method

// const marks = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-']

// let bIndexFirst = marks.indexOf('B-')
// let bIndexFirstLast = marks.lastIndexOf('B-')

// console.log(marks[bIndexFirst] + ' is first at: ' + bIndexFirst)
// console.log(marks[bIndexFirstLast] + ' is last at ' + bIndexFirstLast)


// Array - Join Method

// const elements = ['Wind', 'Water', 'Fire', 'Air']

// console.log( elements.join() )
// console.log( elements.join(' '))
// console.log( elements.join(' ; '))
// console.log( elements.join(' * '))


// Arrays - forEach Method

// const hobbits = ['Bilbo', 'Frodo', 'Samwise', 'Merry', 'Pippin']

// hobbits.forEach((hobbit, index) => {
//     console.log(`#${index}: ${hobbit}`)
// })


// Array - Find Method

// const products = [
//     {id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts'},
//     {id: 2, title: "Men's Hoodie", price: 54.95, category: 'witer'},
//     {id: 3, title: "Denim Jeans", price: 49.95, category: 'pants'}
// ]

// let jeans = products.find(product => product.title == 'Denim Jeans')
// let shirt = products.find(product => product.category == 'Shirts')
// console.log(jeans)
// console.log(shirt)


// Array - Filter Method

// const products = [
//     {id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts'},
//     {id: 2, title: "Men's Hoodie", price: 54.95, category: 'witer'},
//     {id: 3, title: "Denim Jeans", price: 49.95, category: 'pants'},
//     {id: 4, title: "Ladies Tee", price: 25.95, category: 'shirts'}
//     ]

// let shirts = products.filter(product => product.category == 'Shirts')
// let under50 = products.filter(product => product.price < 50)
// console.log(shirts)
// console.log(under50)

// Arrays - Map Method

// let titles = products.map(product => product.title)
// let h2titles = products.map(product => '<h2>' +product.title+ '</h2>')
// let raisedPrices = products.map(product => ({...product, price: product.price + 5}))
// console.log(titles)
// console.log(h2titles)
// console.log(raisedPrices)

// Arrays - Sort Method
// products.sort( (product1, product2) => product1.price - product2.price)
// console.log(products)

// products.sort( (p1, p2) => p1.title > p2.title ? 1: -1)
// console.log(products)

// const numbers = [4,8,1,5,66,23,41]
// console.log( numbers.sort())
// console.log( numbers.sort((num1, num2) => num1 - num2))

// Arrays - Reverse Method

// const elements = ['Wind', 'Water', 'Fire', 'Air']
// const reversed1 = elements.reverse()
// const reversed2 = [...elements].reverse()

// console.log(elements)
// console.log(reversed2)

// Array - Reduce Method

// const products = [
//     {id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts', quantity: 2 },
//     {id: 2, title: "Men's Hoodie", price: 54.95, category: 'witer', quantity: 3 },
//     {id: 3, title: "Denim Jeans", price: 49.95, category: 'pants', quantity: 5 },
// ]

// const totalPrice = products.reduce((currentTotal, currentProduct) => currentTotal + currentProduct.price, 0)
// const totalQty = products.reduce((currentQty, currentProduct) => currentQty + currentProduct.quantity, 0)

// console.log(totalPrice)
// console.log(totalQty)

// Arrays - Reduce Method Continued 

// const products = [
//     {id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts'},
//     {id: 2, title: "Men's Hoodie", price: 54.95, category: 'winter'},
//     {id: 3, title: "Denim Jeans", price: 49.95, category: 'pants'},

//     ]

//     const over25Titles = products.filter(prod => prod.price > 25).map(prod => prod.title)
//     console.log(over25Titles)

//     const hiloProducts = [...products].sort((p1, p2) => p1.price - p2.price).reverse().map(prod => ({id:prod.id, title: prod}))
//     console.log(hiloProducts)


// Iterables - Array Example

// const animalsArr = ['tiger', 'lion', 'elephant', 'giraffe']
// for (let animal of animalsArr) (console.log(animal))

// console.log( Array.from("string"))
// console.log( Array.from(new Set(['cat', 'bat', 'sat', 'cat', 'bat'])))
// console.log( Array.from(new Map([[1, 'one'], [2, 'two'], [3, 'three']])))

// function makeArray() {
//     return Array.from(arguments)
// }

// console.log( makeArray(1,2,3))


// Map Objects

// const exampleMap = new Map()

// exampleMap.set(1, 'number one')
// exampleMap.set('1', 'string one')
// exampleMap.set(true, 'true')
// exampleMap.set({name: 'John'}, {phone: '012345678'})
// exampleMap.set('1', 'second string one')
// console.log(exampleMap.size)
// console.log(exampleMap)

// // Methods and properties continued

// console.log( exampleMap.get('1'))
// console.log( exampleMap.get(2))
// console.log( exampleMap.has(1))
// console.log( exampleMap.delete(true))

// exampleMap.clear()

// console.log( exampleMap)


// Map Iteration - Keys - Values - Entries

// const recipeMap = new Map([
//     ['flour', '1 cup'],
//     ['milk', '1/2 cup'],
//     ['eggs', '2'],
//     ['butter', '50g']
// ])
// for (let ingredient of recipeMap.keys()) {
//     console.log(ingredient)
// }
// for (let quantity of recipeMap.values()) {
//     console.log(quantity)
// }
// for (let item of recipeMap) {
//     console.log(item)
// }

// Map conversions with Object

// const priceMap = new Map([
//     ['banana', 1],
//     ['pineapple', 2],
//     ['watermelon', 5]
// ])

// const priceObject = Object.fromEntries(priceMap)
// console.log(priceObject)

// Map conversions with Object Continued

// const priceObject = { banana: 1, pineapple: 2, watermelon: 5 }

// const priceMap = new Map( Object.entries(priceObject))
// console.log(priceMap)


// Map - Caching Example

// function fetchExternalData(id) {
//     console.log(`fetching data for ID: ${id}`)
//     const data = `Data for ID: ${id}`
//     return data
// }

// const cache = new Map()

// function getCachedData(id) {
//     if (cache.has(id)) {
//         return cache.get(id)
//     }


// const data = fetchExternalData(id)
// cache.set(id, data)
// return data

// }

// console.log('#1: ' +getCachedData(1))
// console.log('#2: ' + getCachedData(1))

// Set - Set of Values

// const names = new Set(['Pedro', 'Oliver', 'Jack', 'Mateo'])
// names.add('Mateo')
// names.add('Oliver')
// names.add('Bruno')
// console.log(names.size)
// console.log(names)

// Methods Continued Delete - Has - Clear

// const names = new Set(['Pedro', 'Oliver', 'Jack', 'Mateo'])

// console.log( names.delete('Jack'))
// console.log( names.has('Jack'))
// console.log( names.has('Mateo'))
// names.clear()
// console.log(names)

// const names = new Set(['Pedro', 'Oliver', 'Jack', 'Mateo'])

// for (let name of names) {
//     console.log(name)
// }

// names.forEach(name => console.log(name))

// Destructuring Assignment - Unpack

// const mj = ['Michael', 'Jordan']
// const [mjFirst, mjLast] = mj

// console.log(mjFirst, mjLast)

// const [jcFirst, jcLast, , ,jcPlace] = ['Julius', 'Caesar', 'Consul', 'of the', 'Roman', 'Republic']
// console.log(`${jcFirst} ${jcLast} is a ${jcPlace}`)

// Iterable on right side - Array Destructuring

// const [a, b, c] = "abc"
// const [ one, two, three] = new Set([1,2,3])
// const [[type, quantity]] = new Map([['apple', 4]])
// console.log(a, b, c, one, two, three, type, quantity)

// const monarch = {} ;
// [ monarch.title, monarch.name ] = "King Charles".split(' ') ;
// console.log(monarch)


// const teeProduct = {id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'shirts' -- had issues with this one

//     for (let [key, value] of Object.entries(teeProduct)){
//         console.log(`${key}: ${value}`)
//     }

    
// let student = 'James', teacher = 'Andrew';
// [student, teacher] = [teacher, student]

// console.log(student)
// console.log(teacher)



// const [jcFirst, jcLast, ...jcTitles] = ['Julius', 'Caesar', 'Consul', 'of the', 'Roman', 'Republic']
// console.log( jcTitles)
// console.log( jcTitles.length)

// const [jcFirst = 'Unknown', jcLast, jcTitle = 'Consul'] = ['', 'Caesar']
// console.log( jcFirst)
// console.log( jcTitle)

// let {width, height, title } = { title: 'My Component', height: 100, width:200 }
// console.log(width, height, title)

// let {width = 200, height = 100, title} = {title: 'My Component'}
// console.log(width,height,title)

// -Smart Object Destructuring

// function displayComponent({height = 200, width = 100, title}) {
//     console.log(`<div style="width:${width}px; height:${height}px"><h2>${title}</h2></div>`)

// }

// displayComponent({width:200, title: 'My Awesome Component'})
// displayComponent({title: 'My Amazing Component'})
// displayComponent({width:300, height:300, title: 'My Average component'})


// let options = { width: 200, height: 100, title: 'My component'}
// let { title, ...rest} = options
// console.log(title)
// console.log(rest)

// const now = new Date()
// console.log( now )
// console.log(+now)

// const boxingDay = new Date
// console.log(boxingDay)


// JSON

// const student = {
//     name: 'Sita',
//     age: 28,
//     courses: ['HTML', 'CSS', 'JS'],
//     occupation: null
// }

// console.log( JSON.stringify(student))


// JSON Skip Object Properties

// const book = {
//     title: "Gone with the wind",
//     printTitle() {
//         console.log(this.title)
//     },
//     releaseDate: undefined
// }

// console.log(JSON.stringify(book))


// const room = {
//     number: 23
// }
// const meetup = {
//     title: "Strategy Conference",
//     participants: ['Chris', 'Tina'],
// }

// meetup.place = room
// room.occupiedBy = meetup

// JSON.stringify(meetup)

// console.log( JSON.stringify(meetup, ['title', 'participants']))

// console.log( JSON.stringify(meetup, function(key, value) {
//     if(key != '' && value ==meetup) return undefined
//     else if (typeof value == 'function') return value.tostring()
//         return value
// }, 2))

//JSON.stringify: custom "toJSON"

// const room = {
//     number: 23, toJSON() { return this.number}
// }

// const meetup = {
//     title: "Strategy Conference", participants: ['Chris', 'Tina']
// }

// meetup.place = room
// room.occupiedBy = meetup

// console.log( JSON.stringify(meetup))


// const meetup = {
//     title: "Strategy Conference", participants: ['Chris', 'Tina'], date: '2024-11-06'
// }

// const meetupString = JSON.stringify(meetup)
// const meetupParsed = JSON.parse(meetupString, (key, value) => {
//     if ( !isNaN(Date.parse(value)) ) return new Date(value)
//         return value

// })

// console.log(meetupParsed)


// const box1 = {
//     size: 'large',
//     dimensions: {width: 50, length: 70, height: 30, units: 'cm'},
//     items: ['glasses', 'plates', 'cutlery']
// }

// const boxString = JSON.stringify(box1)
// const box2 = JSON.parse(boxString)

// console.log("original box1 object:", box1)
// console.log("JSON string of box1", boxString)
// console.log("Parsed boxed 2 object:", box2)


