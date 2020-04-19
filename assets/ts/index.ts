console.log('Hello TypeScript!')

// * --- Basic Types ---

//string
const personName: string = 'Jose'

// number
const age: number = 24

// array of numbers
const ages: number[] = [24, 33, 34, 19, 20]

// array of strings
const names: string[] = ['Mimi', 'Jojito', 'Buraki']

// array of strings and numbers
const namesAndAges: Array<string | number> = ['Mimi', 5, 'Jojito', 1]

// enums
enum Color {
  Red = '#f44336',
  Green = '#4caf50',
  Blue = '#2196f3'
}

const favColor: Color = Color.Blue

// objects
const person: object = {
  name: 'José',
  age: 24,
  favColor: Color.Blue
}
console.log("person", person)

// any
let something: any
something = 'Mimi'
something = 2049

// * --- Functions ---
// Return a primitive type
function add (num1: number, num2: number): number {
  return num1 + num2
}

console.log(add(13, 56))

// Return a Function
function adderCreator (a: number): (b: number) => number {
  return function (b) {
    return a + b
  }
}

const addFour = adderCreator(4)
const fourPlusSix = addFour(6)
console.log(fourPlusSix) // 10

// default values & optional parameters
function presentation (name: string, lastname: string = 'Smith', age?: number): string {
  if (age) {
    return `My name is ${name} ${lastname}, I'm ${age} years old`
  }

  return `My name is ${name} ${lastname}`
}

console.log(presentation('José', 'Cuevas', 24))
console.log(presentation('John'))