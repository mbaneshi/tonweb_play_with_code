const Address = TonWeb.utils.Address;

const address = new Address(anyForm: string | Address);

address.isUserFriendly: boolean

address.isUrlSafe: boolean

address.isBounceable: boolean

address.isTestOnly: boolean

address.wc: number

address.hashPart: Uint8Array

address.toString(isUserFriendly?: boolean, isUrlSafe?: boolean, isBounceable?: boolean, isTestOnly?: boolean): string
