import { Data } from "effect"
import { User } from "./User.ts"
import { Auth } from "./Auth.ts"

export type Session = Data.TaggedEnum<{
    Unknown: {
        id: string
    }
    Standard: {
        id: string
        user: User
        auth: Auth
    }
}>

export const Session = Data.taggedEnum<
    Session
>()
