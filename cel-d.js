// Create some cells
const c2 = new TonWeb.boc.Cell();
c2.bits.writeUint(42, 7);

const c3 = new TonWeb.boc.Cell();
c3.bits.writeUint(73, 255);

const c1 = new TonWeb.boc.Cell();
c1.bits.writeUint8(0);
c1.refs.push(c2);
c1.refs.push(c3);

// Check it deserialized correctly
const deC1 = TonWeb.boc.Cell.fromBoc(await c1.toBoc());
(await deC1.hash()).toString() === (await c1.hash()).toString();
