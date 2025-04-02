type User = {
    username: string
    role: UserRole
}

type UserRole = "guest" | "member" | "admin"

let userRole: UserRole = "member"

userRole = "admin"

//userRole = "fsdfsdo"  ( Type '"fsdfsdo"' is not assignable to type 'UserRole'.ts(2322) )