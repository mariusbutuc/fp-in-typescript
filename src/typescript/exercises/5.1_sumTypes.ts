export {}
/*
Task: Create a function that takes a string "firstName" or
"age" and a Person and gets the FirstName or FlexibleAge property
off of the Person object
*/
type FirstName = string
type LastName = string
type FlexibleAge = number | string

interface Person {
	firstName: FirstName
	lastName: LastName
	age: FlexibleAge
}

type Foo = FirstName | FlexibleAge

const getNameOrAge = (person: Person, choice: string): Foo => (choice === "age") ? person.age : person.firstName
