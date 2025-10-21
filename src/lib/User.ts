import { Data } from "effect"
import { Session } from "node:inspector/promises"
import { Auth } from "./Auth.ts"
import { Credentials } from "./Credentials.ts"

export type User = {
    _tag: "User"
    id: string
    auth: Auth[]
    sessions: Session[]
    credentials: Credentials[]
}

export const User = Data.tagged<User>(
    "User",
)
