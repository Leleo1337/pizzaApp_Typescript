type UserRole = "guest" | "member" | "admin" | "contributor"
type User = {
    id: number
    username: string
    role: UserRole
}
type UpdatedUser = Partial<User>

const users: User[] = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice_jones", role: "admin" },
    { id: 4, username: "charlie_brown", role: "member" },
]

let nextUserId = 1

function addNewUser(userProps: Omit<User, "id">): User{
    const newUser = { 
        id: nextUserId++,
        ...userProps
    }
    users.push(newUser)

    return newUser

}


addNewUser({ username: "joe_schmoe", role: "member" })


function fetchUserDetails(username: string): User{
    const user = users.find(userObj => userObj.username === username)

    if(!user){
        throw new Error(`User with username ${username} not found`)
    }

    return user
}

function updateUser(id: number, updates: UpdatedUser):User | undefined {
    const user = users.find(user => user.id === id)

    if(!user){
        console.error("User not found")
        return
    }

    const updatedUser = Object.assign(user, updates)

    console.log(updatedUser)
    return updatedUser
}

//fetchUserDetails('john_doe')


// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

console.log(users)

//role: "fsdfsdo"  ( Type '"fsdfsdo"' is not assignable to type 'UserRole'.ts(2322) )