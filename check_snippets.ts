import TonWeb from "tonweb";
const nacl = TonWeb.utils.nacl; // use nacl library for key pairs
const tonweb = new TonWeb();

const keyPair = nacl.sign.keyPair(); // create new random key pair

let wallet = tonweb.wallet.create({ publicKey: keyPair.publicKey, wc: 0 }); // create interface to wallet smart contract (wallet v3 by default)

//OR

wallet = tonweb.wallet.create({
  address: "EQDjVXa_oltdBP64Nc__p397xLCvGm2IcZ1ba7anSW0NAkeP",
}); // if your know only address at this moment

const address = await wallet.getAddress();

const seqno = await wallet.methods.seqno().call(); // call get-method `seqno` of wallet smart contract

// DEPLOY

const deploy = wallet.deploy(keyPair.secretKey); // deploy method

const deployFee = await deploy.estimateFee(); // get estimate fee of deploy

const deploySended = await deploy.send(); // deploy wallet contract to blockchain

const deployQuery = await deploy.getQuery(); // get deploy query Cell

// TRANSFER TON COINS
const transfer = wallet.methods.transfer({
  secretKey: keyPair.secretKey,
  toAddress: "EQDjVXa_oltdBP64Nc__p397xLCvGm2IcZ1ba7anSW0NAkeP",
  amount: TonWeb.utils.toNano("0.01"), // 0.01 TON
  seqno: seqno,
  payload: "Hello",
  sendMode: 3,
});

const transferFee = await transfer.estimateFee(); // get estimate fee of transfer

const transferSended = await transfer.send(); // send transfer query to blockchain

const transferQuery = await transfer.getQuery(); // get transfer query Cell
