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

 import { transfer,RetriveMemo,TokenAccount  } from './transactio';

import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram } from '@solana/web3.js'

const verifiedPubkey = new PublicKey("FySLEAhi2jayVk4SiVAaCu14fd2ypLbPC4q7TEGEQmYx");

let connection = new Connection ("https://api.devnet.solana.com", "confirmed");
async function main (){
  // const sig = await transfer()
  // RetriveMemo(sig)

  TokenAccount('EbeourjESYjSB89KchMV3gozfgBBAyxKd1Zt5nkCwbJJ')
 
}

main();
