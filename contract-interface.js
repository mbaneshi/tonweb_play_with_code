
/**
* @param provider    {HttpProvider}
* @param options    {{code?: Uint8Array, address?: Address, wc?: number}}
*/
const contract = new Contract(provider, options)

const address: Address = contract.getAddress();


const deployMethod = contract.deploy(keyPair.secretKey);

const query: Cell = await deployMethod.getQuery(); // get init external message as Cell

await deplotMethod.estimateFee(); // get estimate fee of deploy 

await deployMethod.send(); // send init external message to blockchain


contract.methods; // object contains all methods of this smart contract

const myMethod = contract.methods.myMethod(myParams);

const query: Cell = await myMethod.getQuery(); // get external message 

await myMethod.estimateFee(); // get estimate fee 

await myMethod.send(); // send to blockchain 


const myGetMethod = contract.methods.myGetMethod(myParams);

const result = await myGetMethod.call(); // invoke get-method of this smart contract
