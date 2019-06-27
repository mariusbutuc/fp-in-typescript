/*
Task1: Parameterize the Person interface so that additionalInformation
can be any type you want

Task2: create a generic function that will construct a Person
*/
interface Person<T> {
	firstName: string
	lastName: string
	age: number
	additionalInformation: T
}

const mkPerson = <U>(firstName: string, lastName: string, age: number, additionalInformation: U): Person<U> => ({
	firstName,
	lastName,
	age,
	additionalInformation,
})
