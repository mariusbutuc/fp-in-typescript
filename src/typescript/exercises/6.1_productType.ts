interface Pair<T, U> {
	first: T
	second: U
}

const pair = <T, U>(first: T, second: U): Pair<T, U> => ({ first, second })

/*
Task: create a function that takes a string and returns a
pair of the string and its length
*/

const stringAndLength = (stringToBeMeasured: string): Pair<string, number> =>
	pair(stringToBeMeasured, stringToBeMeasured.length)
