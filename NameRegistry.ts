import * as Name from "@bonfida/spl-name-service"
import { createInstruction, getFilteredProgramAccounts, getHashedName, getNameAccountKey, NameRegistryState, NAME_PROGRAM_ID, Numberu32, Numberu64 } from "@bonfida/spl-name-service";
import state from "@project-serum/anchor/dist/program/namespace/state";
import * as web3 from "@solana/web3.js"
import { uint64 } from "@solana/web3.js/src/layout";
import {memoprogram } from  "./memo"

const connection = new web3.Connection("https://api.devnet.solana.com", "confirmed");


const HOLDER_KEY = new Uint8Array([
    224,154,166,218,4,63,215,112,123,130,174,95,119,178,152,7,215,57,198,247,47,102,100,110,156,113,209,71,39,117,182,24,129,83,94,111,106,30,204,14,170,77,35,252,5,89,93,252,108,153,26,195,159,111,38,200,143,87,10,238,113,181,68,182
    ]);

export  async  function createnameRegistry(){
 
////////////////////////////////////////////////////////////////////////////////
///////////Root 
console.log(`${NAME_PROGRAM_ID}   program id `);

     const myWallet = web3.Keypair.fromSecretKey(HOLDER_KEY);
    console.log(`${myWallet.publicKey} admin public key`);
     


    const regdata=  await getTwitterRegistryData(connection,myWallet.publicKey);
console.log(`${regdata} pleqase cisneh`);

const mywalley = web3.Keypair.generate();
const payer = web3.Keypair.generate();

var className = myWallet.publicKey; //
const rootName ="EbeourjESYjSB89KchMV3gozfgBBAyxKd1Zt5kCwJJ";//xyz
// const rsaKey = "rsa key";
// const ipfsHash=" ipfshash ";
  var transaction =  new web3.Transaction()
    // var instruction =  await Name.createNameRegistry(connection, rootName, 1000,
    // myWallet.publicKey, myWallet.publicKey,
    // 10000000,
    // myWallet.publicKey,
    // undefined
    
    // )   //main domain .sol 

    
// transaction.add(instruction);
  


  

const RootHashName = await Name.getHashedName(rootName);
var check =RootHashName.toString('hex');
console.log(`${check} root name -hex value `);

  const ROOT_PARENT_REGISTRY_KEY = await Name.getNameAccountKey(RootHashName,className,undefined );
  const ROOT_VERIFICATIO_AUTORITY = myWallet.publicKey;
  
// xyz

  console.log(`${ROOT_PARENT_REGISTRY_KEY
  }   ROOT PARENT  FOR PUBKEY `);

  console.log(`${ROOT_VERIFICATIO_AUTORITY
  }   ROOT VERIFICATIO`);

  // var signature = await web3.sendAndConfirmTransaction(
  //   connection,
  //   transaction,
  //   [myWallet],
   
  // );
//xyz
// console.log(`${signature}`);

/////////////////////////////////////////////////////////////////////////////////////////////////

//child call 


// let child  = "rahul";//
// let child = "pratik";
// let child ="shenoy"
// let child ="polkamusic";
// let child =" rahul@punkmail.io";
// let child =" solana india ";
// let child ="sangeet";
// let child ="xhashtag";
// let child ="sdiidwoddvn";
// let child ="somone";

// let child ="Qmc8c9oSiLPp3Yn9w1StNnUCxgYaR5g4gPpVBfj1Nq3H ";
// let child ="Qmc8c9oSiLPp3Yn9w1StNnUCxgYaR5g4gPpVBfj1Nq3 ";
let child ="Qmc8c9oSiLPp3Yn9w1StNnCxgYaR5g4gPBfj1Nq3 ";
let subdomainClass = await web3.Keypair.generate();
console.log(`${typeof subdomainClass }  store it `);
  // await connection.requestAirdrop(subdomainClass.publicKey, 1000000000);
 
if(subdomainClass.publicKey === null){

  console.log(`  not good` );
  
}else {
  console.log(`${subdomainClass.publicKey} owner ` );
}
  

//   ///////////////////////////////////////////////
   //getting Name Account Key
  const hashechild = await getHashedName(child);
  const childRegistryKey = await getNameAccountKey(
    hashechild,
    undefined,
     ROOT_PARENT_REGISTRY_KEY
  );

     Name.getTwitterRegistry
  // console.log(`${childRegistryKey}   check me   `);
  await connection.requestAirdrop(subdomainClass.publicKey, 1000000000);
//create transactio 
await connection.requestAirdrop(myWallet.publicKey, 1000000000);
  let instructions = 
    createInstruction(
      NAME_PROGRAM_ID,//
      web3.SystemProgram.programId,
      childRegistryKey,
      subdomainClass.publicKey,
      subdomainClass.publicKey,
      hashechild,
      
      new Numberu64(await connection.getMinimumBalanceForRentExemption(1000)),
      new Numberu32(1000),
      undefined,
      ROOT_PARENT_REGISTRY_KEY,//xyz
     ROOT_VERIFICATIO_AUTORITY//admin pubkey
    );//pratik.sol 

// pratikxyz

//  shenoy.ipfs.spl    

await connection.requestAirdrop(subdomainClass.publicKey, 1000000000);
//create transactio 
await connection.requestAirdrop(myWallet.publicKey, 1000000000);
transaction.add(instructions)
    var signature = await web3.sendAndConfirmTransaction(
      connection,
      transaction,
      [myWallet,subdomainClass],
     
    );
 
    console.log(`${signature} child  sign with root as .pubkey`);

  // Name.updateInstruction()










//////////////////////////////////////////////////////////////////////////////////////////////

// transsfer
    
          
//////////////////////////////////////////////
  

//////////////////////////////////////////////
// get registry key 



/////////////////////////////////////////////////





}


export async function transfeOwnerr(child:string,ROOT_PARENT_REGISTRY_KEY:web3.PublicKey,newOwner:web3.Keypair,currentOwner:web3.PublicKey) {
 
  // const newOwner = web3.Keypair.generate();
  var transaction =  new web3.Transaction();
  await connection.requestAirdrop(newOwner.publicKey, 1000000000);
  const childname  = await getHashedName(child);
  const childRegistryKey2 = await getNameAccountKey(
    childname,
    undefined,
     ROOT_PARENT_REGISTRY_KEY
  );
     console.log(`${childRegistryKey2}   check me   `);
  console.log(`  getNameAccountKey`);
// const transferOwnership = await  Name.transferNameOwnership(connection,child,newOwner.publicKey,subdomainClass.publicKey,ROOT_PARENT_REGISTRY_KEY);
const transferOwnership = await Name.transferInstruction(NAME_PROGRAM_ID,childRegistryKey2,
  newOwner.publicKey,
  currentOwner,
  undefined
  );

          transaction.add(transferOwnership);
          // console.log(`  lets see`);
var signature = await web3.sendAndConfirmTransaction(
  connection,
  transaction,
  [newOwner],
 
); 
// console.log(`  what happende`);
console.log(`${signature}  ownership transfer `);
}
////////////////////////////////////////////

export async function getRegistry(
  connection: web3.Connection,
  twitter_handle: string
): Promise<NameRegistryState> {
  const ROOT_PARENT  = new web3.PublicKey("He8545XmsuPabXzk3VkrRQdXdCVsgMsauKAXyZtvGWz4");
  const hashedTwitterHandle = await getHashedName(twitter_handle);
  const twitterHandleRegistryKey = await getNameAccountKey(
    hashedTwitterHandle,
    undefined,
    ROOT_PARENT
  );
  const registry = await Name.NameRegistryState.retrieve(
    connection,
    twitterHandleRegistryKey
  );
  return registry;
}
///////////////////////////////////////////////////////////////////////////

export async function getTwitterRegistryData(
  connection: web3.Connection,
  verifiedPubkey: web3.PublicKey
): Promise<Buffer> {
  const ROOT_PARENT  = new web3.PublicKey("He8545XmsuPabXzk3VkrRQdXdCVsgMsauKAXyZtvGWz4");

  const filters = [
    {
      memcmp: {
        offset: 0,
        bytes: ROOT_PARENT.toBytes(),
      },
    },
    {
      memcmp: {
        offset: 32,
        bytes: verifiedPubkey.toBytes(),
      },
    },
    {
      memcmp: {
        offset: 64,
        bytes: new web3.PublicKey(Buffer.alloc(32, 0)).toBase58(),
      },
    },
  ];

  const filteredAccounts = await getFilteredProgramAccounts(
    connection,
    NAME_PROGRAM_ID,
    filters
  );

  if (filteredAccounts.length > 1) {
    throw new Error('Found more than one registry.');
  }

  return filteredAccounts[0].accountInfo.data.slice(
    NameRegistryState.HEADER_LEN
  );
}


/////////////////////////////////////////////////////////////////////////////
