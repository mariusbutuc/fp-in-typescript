export {}

interface Person {
	firstName: string
	lastName: string
	age: number
}

// Create a factory function that will build a person
const personFactory = (firstName: string, lastName: string, age: number): Person => ({
	firstName,
	lastName,
	age,
})

// Create a getter function for each field
// Provide correct type signatures for the function
const firstNameGetter = (person: Person): string => person.firstName
const lastNameGetter = (person: Person): string => person.lastName
const ageGetter = (person: Person): number => person.age
