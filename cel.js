
const cell = new Cell();

cell.bits: BitString // with length 1023

cell.refs: Array<cell> // with length 4

cell.writeCell(anotherCell: Cell): void // Write another cell to this cell

cell.hash(): Promise<Uint8Array> // Hash of cell

cell.print(): string // Recursively prints cell's content like Fift

cell.toBoc(has_idx?: boolean, hash_crc32?: boolean, has_cache_bits?: boolean, flags?: number): Promise<string> // create boc bytearray; toBoc(false) is equialent `2 boc+>B` in Fift

Cell.fromBoc(boc: string | UInt8Array): Cell - decerialize boc bytearray to Cell
