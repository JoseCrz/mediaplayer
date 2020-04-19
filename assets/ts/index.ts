console.log('Hello TypeScript!')
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
