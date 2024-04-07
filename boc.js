
const bitString = new BitString(1023); // create BitString with length 1023 bits

bitString.array: Uint8Array

bitString.length: number

bitString.cursor: number

bitString.getFreeBits(): number

bitString.getUsedBits(): number

bitString.get(n: number): boolean // bit value at position `n`

bitString.on(n: number): void // Set bit value to 1 at position `n`

bitString.off(n: number): void // Set bit value to 0 at position `n`

bitString.toggle(n: number): void // Toggle bit value at position `n`

bitString.forEach(callback: function(boolean): void): void // forEach every bit

bitString.writeBit(b: boolean | number): void; // Write bit and increase cursor

bitString.writeBitArray(b: Array<boolean | number>): void;

bitString.writeUint(number: number | BN, bitLength: number): void; // Write unsigned int

bitString.writeInt(number: number | BN, bitLength: number): void; // Write signed int

bitString.writeBytes(array: Uint8Array): void; 

bitString.writeString(s: string): void; 

bitString.writeGrams(amount: number | BN): void; // amount in nanograms

bitString.writeAddress(address: Address | null): void; 

bitString.writeBitString(anotherBitString  BitString): void; // write another BitString to this BitString 

bitString.clone(): BitString

bitString.toHex(): string // prints BitString like Fift
