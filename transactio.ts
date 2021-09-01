import * as web3 from "@solana/web3.js";
import * as splToken from "@solana/spl-token";
import { newAccountWithLamports } from "./lamport";
import { memoprogram } from "./memo";


// Address: 9vpsmXhZYMpvhCKiVoX5U8b1iKpfwJaFpPEEXF7hRm9N
const DEMO_WALLET_SECRET_KEY = new Uint8Array([
    37, 21, 197, 185, 105, 201, 212, 148, 164, 108, 251, 159, 174, 252, 43, 246,
    225, 156, 38, 203, 99, 42, 244, 73, 252, 143, 34, 239, 15, 222, 217, 91, 132,
    167, 105, 60, 17, 211, 120, 243, 197, 99, 113, 34, 76, 127, 190, 18, 91, 246,
    121, 93, 189, 55, 165, 129, 196, 104, 25, 157, 209, 168, 165, 149,
  ]);
   

   export async function transfer (){


// Connect to cluster
var connection = new web3.Connection(web3.clusterApiUrl("devnet"));
// Construct wallet keypairs
var fromWallet = web3.Keypair.fromSecretKey(DEMO_WALLET_SECRET_KEY);
var acc= await newAccountWithLamports(connection, 1000000000);
var toWallet = web3.Keypair.generate();
// Construct my token class
var myMint = new web3.PublicKey("Au8Axri4xiWyHwjpPpvfE2fwp4oY8ZjTULXz3rkTRJ4S");
var myToken = new splToken.Token(
  connection,
  myMint,
  splToken.TOKEN_PROGRAM_ID,
  acc
);
// Create associated token accounts for my token if they don't exist yet
var fromTokenAccount = await myToken.getOrCreateAssociatedAccountInfo(
  fromWallet.publicKey
)
var toTokenAccount = await myToken.getOrCreateAssociatedAccountInfo(
  toWallet.publicKey
)
// Add token transfer instructions to transaction


var transaction = new web3.Transaction()
  .add(
    splToken.Token.createTransferInstruction(
      splToken.TOKEN_PROGRAM_ID,
      fromTokenAccount.address,
      toTokenAccount.address,
      fromWallet.publicKey,
      [],
      0
    )
  );

      transaction.add(await memoprogram.wriiteutf8(fromWallet.publicKey, "hello "));
       console.log(`memo added  ${fromWallet.publicKey}`);
// Sign transaction, broadcast, and confirm
var signature = await web3.sendAndConfirmTransaction(
  connection,
  transaction,
  [fromWallet]
);
console.log("SIGNATURE", signature);
console.log("SUCCESS");
   }

  
  // Add instruction to write memo
// transaction.addInstruction(
//   MemoProgram.writeUtf8(feePayer.getPublicKey(),"Hello from SolanaJ :)")
// );