import {
    // createVerifiedTwitterRegistry,
    // getTwitterRegistryKey,
    // getTwitterRegistry,
    // createVerifiedTwitterRegistry,
    // getHandleAndRegistryKey,
    // TWITTER_VERIFICATION_AUTHORITY,
    // getTwitterRegistryData,
    // // getTwitterHandleandRegistryKeyViaFilters

}from './index'

 import { transfer  } from './transactio';

import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram } from '@solana/web3.js'
import { getHashedName,getTwitterRegistryKey, TWITTER_ROOT_PARENT_REGISTRY_KEY,getTwitterHandleandRegistryKeyViaFilters, NameRegistryState, createVerifiedTwitterRegistry, getNameAccountKey, createInstruction, NAME_PROGRAM_ID, Numberu32, Numberu64, updateInstruction, getFilteredProgramAccounts } from '@solana/spl-name-service';

const verifiedPubkey = new PublicKey("FySLEAhi2jayVk4SiVAaCu14fd2ypLbPC4q7TEGEQmYx");

let connection = new Connection ("https://api.mainnet-beta.solana.com", "confirmed");
async function main (){

let name ="ramen "
// let verifiedPubkey = new PublicKey("8QqnVgc78vFCd5cLXA5eJnKwyTKb6QhHQSZEqZt3CYZn");
let payerpubkey = new PublicKey("8QqnVgc78vFCd5cLXA5eJnKwyTKb6QhHQSZEqZt3CYZn");
let payerKey = new PublicKey("FySLEAhi2jayVk4SiVAaCu14fd2ypLbPC4q7TEGEQmYx");

//create  registry
  // let res= await createVerifiedTwitterRegistry(connection, name,verifiedPubkey , 1024,payerpubkey );

  
//   console.log(`${res.toLocaleString}`);
// const hashedName = await getHashedName(name);
// const nameaccountkey = await getNameAccountKey(
//   hashedName,
//   undefined,
//   payerpubkey
// );const space:number=10;
//       let res =  createInstruction(
       

//         NAME_PROGRAM_ID,
//         SystemProgram.programId,
//         nameaccountkey  ,// name  key 
//         payerKey,// name owner key 
//         payerKey,//payer key
//         hashedName,//buffer 
//         new Numberu64(await connection.getMinimumBalanceForRentExemption(space)),
//         new Numberu32(space),//space 
//         payerKey,//name class key 
//         NAME_PROGRAM_ID,//name parent 
//         payerKey// name parent owner
//       )

//   console.log(`${res}  create instrution`);


  //  let newdata= getHashedName("rahul ");
  //  let newupdtaesigner=payerpubkey
  // let update = updateInstruction(


  //   NAME_PROGRAM_ID,
  //   nameaccountkey,//name key 
  //   new Numberu32(0),
  //   await newdata,
  //   newupdtaesigner


  // )
  // const filters = [
  //   {
  //     memcmp: {
  //       offset: 0,
  //       bytes: payerKey.toBytes(),
  //     },
  //   },
  //   {
  //     memcmp: {
  //       offset: 32,
  //       bytes: verifiedPubkey.toBytes(),
  //     },
  //   },
  //   {
  //     memcmp: {
  //       offset: 64,
  //       bytes: new PublicKey(Buffer.alloc(32, 0)).toBase58(),
  //     },
  //   },
  // ];

  // const filteredAccounts = await getFilteredProgramAccounts(
  //   connection,
  //   NAME_PROGRAM_ID,
  //   filters
  // );

  // if (filteredAccounts.length > 1) {
  //   throw new Error('Found more than one registry.');
  // }

  // const hashedTwitterHandle = await getHashedName("rahul");
  // const twitterHandleRegistryKey = await getNameAccountKey(
  //   hashedName,
  //   undefined,
  //   TWITTER_ROOT_PARENT_REGISTRY_KEY
  // );
  // const registry = NameRegistryState.retrieve(
  //   connection,
  //   twitterHandleRegistryKey
  // );

  //  console.log(`${(await registry).data}`);

  // return registry/

  await transfer()
}

main();
