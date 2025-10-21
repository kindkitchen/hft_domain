import { Data } from "effect"

export type Auth = Data.TaggedEnum<{
    Google: {
        sub: string
        email: string
    }
}>

export const Auth = Data.taggedEnum<Auth>()
