type Adress = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    adress?: Adress
}
// adress?: = interrogação define como um parametro opcional

const person1: Person = {
    name: 'leo',
    age: 17,
    isStudent: true,
    adress: {
        street: 'anyStreet',
        city: 'anyCity',
        country: 'anyCountry'
    }
}

const person2: Person = {
    name: 'Joe',
    age: 32,
    isStudent: false,
    adress: {
        street: 'anyStreet',
        city: 'anyCity',
        country: 'anyCountry'
    }
}

function displayInfo(person: Person){
    console.log(`person: ${person.name} lives at ${person.adress?.street}`)
}

displayInfo(person1)