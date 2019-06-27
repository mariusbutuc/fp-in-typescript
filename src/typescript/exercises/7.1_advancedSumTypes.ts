interface Javascript {
	name: "javascript"
	packageManager: string
}
interface Ruby {
	name: "ruby"
	onRails: boolean
}

interface Java {
	name: "java"
	compiler: string
}

type ProgrammingLanguage = Javascript | Ruby | Java

const getProgrammingLanguageInfo = (pl: ProgrammingLanguage): string | boolean => {
	switch (pl.name) {
		case "javascript":
			return pl.packageManager
		case "ruby":
			return pl.onRails
		case "java":
			return pl.compiler
	}
}

/*
create three functions that takes a ProgrammingLanguage and will return true if
the ProgrammingLanguage passed is the one the function expects
*/

const isJavascript = () => {}
const isRuby = () => {}
const isJava = () => {}
