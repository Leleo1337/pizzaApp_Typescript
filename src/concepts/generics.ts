type Voter = {
    name: string
    age: number
}

const gameScores: number[] = [14, 21, 33, 42, 59]
const favoriteThings: string[] = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
const voters: Voter[] = [{ name: "Alice", age: 42 }, { name: "Bob", age: 77 }]

function getLastItem<Type>(array: Type[]): Type | undefined{
    return array[array.length - 1]
}

console.log(getLastItem(gameScores))
console.log(getLastItem(favoriteThings))
console.log(getLastItem(voters))