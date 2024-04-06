// const { default: TonWeb } = require("tonweb");

// const ut = TonWeb.utils();

// const bc = TonWeb.boc;
// console.log(bc);
// console.log(ut);

// console.log(TonWeb);
//

//const tw = new TonWeb();
//console.log(tw);

const TonWeb = require("tonweb");

//const tonweb = new TonWeb();
const tonweb = new TonWeb();

const wallet = tonweb.wallet.create({ publicKey });

const address = await wallet.getAddress();

const nonBounceableAddress = address.toString(true, true, false);

const seqno = await wallet.methods.seqno().call();

await wallet.deploy(secretKey).send(); // deploy wallet to blockchain

const fee = await wallet.methods
  .transfer({
    secretKey,
    toAddress: "EQDjVXa_oltdBP64Nc__p397xLCvGm2IcZ1ba7anSW0NAkeP",
    amount: TonWeb.utils.toNano(0.01), // 0.01 TON
    seqno: seqno,
    payload: "Hello",
    sendMode: 3,
  })
  .estimateFee();

const Cell = TonWeb.boc.Cell;
const cell = new Cell();
cell.bits.writeUint(0, 32);
cell.bits.writeAddress(address);
cell.bits.writeGrams(1);
console.log(cell.print()); // print cell data like Fift
const bocBytes = cell.toBoc();

const history = await tonweb.getTransactions(address);

const balance = await tonweb.getBalance(address);

tonweb.sendBoc(bocBytes);

//console.log(tonweb);
/*
 *
 * TonWeb {
  version: '0.0.66',
  utils: {
    Address: [class Address],
    AdnlAddress: [class AdnlAddress],
    StorageBagId: [class StorageBagId],
    BN: <ref *1> [Function: BN] {
      BN: [Circular *1],
      wordSize: 26,
      isBN: [Function: isBN],
      max: [Function: max],
      min: [Function: min],
      red: [Function: red],
      _prime: [Function: prime],
      mont: [Function: mont]
    },
    nacl: {
      lowlevel: [Object],
      randomBytes: [Function (anonymous)],
      secretbox: [Function],
      scalarMult: [Function],
      box: [Function],
      sign: [Function],
      hash: [Function],
      verify: [Function (anonymous)],
      setPRNG: [Function (anonymous)]
    },
    sha256: [Function: sha256],
    fromNano: [Function: fromNano],
    toNano: [Function: toNano],
    bytesToHex: [Function: bytesToHex],
    hexToBytes: [Function: hexToBytes],
    stringToBytes: [Function: stringToBytes],
    crc32c: [Function: crc32c],
    crc16: [Function: crc16],
    concatBytes: [Function: concatBytes],
    bytesToBase64: [Function: bytesToBase64],
    base64ToBytes: [Function: base64ToBytes],
    base64toString: [Function: base64toString],
    stringToBase64: [Function: stringToBase64],
    compareBytes: [Function: compareBytes],
    readNBytesUIntFromArray: [Function: readNBytesUIntFromArray],
    parseTransferUrl: [Function: parseTransferUrl],
    formatTransferUrl: [Function: formatTransferUrl],
    keyPairFromSeed: [Function: keyPairFromSeed],
    newKeyPair: [Function: newKeyPair],
    newSeed: [Function: newSeed]
  },
  Address: [class Address],
  boc: {
    BitString: [class BitString],
    Cell: [class Cell],
    Slice: [class Slice]
  },
  Contract: [class Contract],
  BlockSubscription: [class BlockSubscription],
  InMemoryBlockStorage: [class InMemoryBlockStorage],
  provider: HttpProvider {
    host: 'https://toncenter.com/api/v2/jsonRPC',
    options: {}
  },
  dns: Dns {
    provider: HttpProvider {
      host: 'https://toncenter.com/api/v2/jsonRPC',
      options: {}
    }
  },
  wallet: Wallets {
    provider: HttpProvider {
      host: 'https://toncenter.com/api/v2/jsonRPC',
      options: {}
    },
    all: {
      simpleR1: [class SimpleWalletContractR1 extends WalletContract],
      simpleR2: [class SimpleWalletContractR2 extends WalletContract],
      simpleR3: [class SimpleWalletContractR3 extends WalletContract],
      v2R1: [class WalletV2ContractR1 extends WalletV2ContractBase],
      v2R2: [class WalletV2ContractR2 extends WalletV2ContractBase],
      v3R1: [Function],
      v3R2: [Function],
      v4R1: [Function],
      v4R2: [Function]
    },
    list: [
      [class SimpleWalletContractR1 extends WalletContract],
      [class SimpleWalletContractR2 extends WalletContract],
      [class SimpleWalletContractR3 extends WalletContract],
      [class WalletV2ContractR1 extends WalletV2ContractBase],
      [class WalletV2ContractR2 extends WalletV2ContractBase],
      [Function],
      [Function],
      [Function],
      [Function]
    ],
    defaultVersion: 'v3R1',
    default: [class WalletV3ContractR1 extends WalletV3ContractBase] {
      parseTransferQuery: [Function: parseWalletV3TransferQuery],
      parseTransferBody: [Function: parseWalletV3TransferBody]
    }
  },
  payments: Payments {
    provider: HttpProvider {
      host: 'https://toncenter.com/api/v2/jsonRPC',
      options: {}
    }
  },
  lockupWallet: {
    LockupWalletV1: [class LockupWalletV1 extends WalletContract] {
      WALLET_ID_BASE: 698983191
    },
    VestingWalletV1: [class VestingWalletV1 extends WalletContract] {
      WALLET_ID_BASE: 268,
      codeHex: 'b5ee9c7241021c010003fb000114ff00f4a413f4bcf2c80b01020120030203b8f28308d71820d31fd31fd31f02f823bbf264ed44d0d31fd31fd3ff305abaf2a15033baf2a202f9014033f910f2a3f800db3c20d74ac0018e99ed44ed45ed47915bed67ed65ed648e82db3ced41edf101f2ff9130e2f841a4f861db3c1b1413020148110402012008050201200706020db9846db3cdb3c81b1a0129ba462db3cf845f846f847f848f849f84af84bf84481b0201200e090201620d0a02016a0c0b012fa2c76cf3e9100723281f2fff2743e112040423d029be84c61b000fa25fb513435c2c7e014bad346d9e36fc22470d4080847a4937d29910ce6903e9ff9837812801b7810148987159f318401b02016e100f0019af1df6a26840106b90eb858fc00019adce76a26840206b90eb85ffc003acd06c2220d749c160915be001d0d3030171b0915be0fa4030db3c01d31fd33ff84b5240c705238210a7733acdbab08ea46c12db3c8210f7733acd01708018c8cb055004cf1623fa0213cb6acb1fcb3fc98040fb00e30e1b141201cef84a5240c7050382107258a69bba13b08ed18e2c01fa407fc8ca0002fa4401c8ca07cbffc9d0f8441023810108f441f86420d74ac200209501d430d001deb312e68210f258a69b32708018c8cb055004cf1623fa0213cb6acb1fcb3fc98040fb00db3c925f03e2130066f848f847f846f845c8cb3fcb1fcb1fcb1ff849fa02f84acf16f84bcf16c9f844f843f842f841c8cb1fcb1fcbfff400ccc9ed54025cd307d4d1f823db3c20c2008e9b22c003f2e06421d0d303fa4031fa40f84a5220c705b3925f04e30d9130e201fb001a1503fa21fa4401c8ca07cbffc9d0f844810108f40a6fa1318f5f330172b0c002f2e06501fa003171d721fa0031fa0031d33f31d31f31d30001c000f2e066d3000193d430d0de2171db3c8e2a31d31f302082104e73744bba21821047657424bab121821056744370bab1018210566f7465bab1f2e067e30e70925f03e220c200191716000e9372fb029130e202ea0170db3c8e6d20d749c2008e63d31f21c00022830bbab122811001bab122821047d54391bab1228210595f07bcbab122821069fb306cbab1228210566f7465bab122821056744370bab1f2e06701c00021d749c200b08e15d3073020c06421c077b121c044b101c057b1f2e0689130e29130e2e30d1918001ad31f308210566f7465baf2e067004401fa4401c3ff925b70e001f833206e925b70e0d020d7498307b9925b70e0d70bffba0060f845f846a05210bc923070e0f845f848a05210b99330f849e0f849f849f84513a1f847a904f846f847a9041023a984a1007eed44d0d31f01f861d31f01f862d3ff01f863f40401f864d401d0d33f01f865d31f01f866d31f01f867d31f01f868fa0001f869fa4001f86afa4001f86bd1d10a20c6a7'
    },
    all: { 'lockup-0.1': [Function], 'vesting-1': [Function] },
    list: [ [Function], [Function] ]
  }
}
*/
