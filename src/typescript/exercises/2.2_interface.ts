export {}
interface Person {
	firstName: string
	lastName: string
	age: number
	occupation: Occupation
}

// create an occupation interface with at least 3 fields
interface Occupation {
	title: string
	salary: number
	jobListingAvailable: boolean
}

// Create a factory function that will build a person
// TODO: Look into type alias/synonym
const personFactory = (firstName: string, lastName: string, age: number, occupation: Occupation): Person => ({
	age,
	firstName,
	lastName,
	occupation,
})

// create getter functions for each field
const titleGetter = (person: Person): string => person.occupation.title
const salaryGetter = (person: Person): number => person.occupation.salary
const jobListingAvailableGetter = (person: Person): boolean => person.occupation.jobListingAvailable
