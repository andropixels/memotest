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

 import { transfer,RetriveMemo,TokenAccount, check  } from './transactio';

import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram } from '@solana/web3.js'
import { tokenTransfer } from './tokentransfer';
import { createnameRegistry, getRegistry, getTwitterRegistryData, transfeOwnerr } from './NameRegistry';
import { web3 } from '@project-serum/anchor';

const verifiedPubkey = new PublicKey("FySLEAhi2jayVk4SiVAaCu14fd2ypLbPC4q7TEGEQmYx");

let connection = new Connection ("https://api.devnet.solana.com", "confirmed");
async function main (){
  // const sig = await transfer()
  // RetriveMemo(sig)
      // await transfer()

      // await tokenTransfer()
      // var txnsign = await transfer();
      // await RetriveMemo(txnsign);

// 
      await createnameRegistry()
      let child ="Qmc8c9oSiLPp3Yn9w1StNnCxgYaR5g4gPpVBfj1Nq3 ";
      const rootName ="EbeourjESYjSB89KchMV3gozfgBBAyxKd1Zt5nkCwJJ";
      const testownerkey = new web3.PublicKey("8UKKq7ocdAqcxb8xkCQt936riNogVgQckFk7Xii4pY6a");
    // const res =  await getRegistry(connection,child);
    // console.log(`${res?.parentName}`);

  // const regdata=  await getTwitterRegistryData(connection,testownerkey);
  // console.log(`${regdata}`);
  const ROOT_PARENT  = new web3.PublicKey("He8545XmsuPabXzk3VkrRQdXdCVsgMsauKAXyZtvGWz4");
  const newOwner = web3.Keypair.generate();
  const currentOwner = new web3.PublicKey("8UKKq7ocdAqcxb8xkCQt936riNogVgQckFk7Xii4pY6a");
  //  await transfeOwnerr(child,ROOT_PARENT,newOwner,currentOwner);
  // TokenAccount('8QqnVgc78vFCd5cLXA5eJnKwyTKb6QhHQSZEqZt3CYZn')
 
}

main();
