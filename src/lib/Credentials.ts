import { Data, Redacted } from "effect"

export type Credentials = Data.TaggedEnum<{
    Kucoin: {
        key: Redacted.Redacted
        passphrase: Redacted.Redacted
        secret: Redacted.Redacted
    }
}>

export const Credentials = Data.taggedEnum<Credentials>()
