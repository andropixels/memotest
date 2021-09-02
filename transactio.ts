import * as web3 from "@solana/web3.js";
import * as splToken from "@solana/spl-token";
import {createNameRegistry,signAndSendTransactionInstructions} from "@solana/spl-name-service"
import { newAccountWithLamports } from "./lamport";
import * as bip39 from "bip39"
import macl from "tweetnacl"
import { memoprogram } from "./memo";
const CryptoJS = require("crypto-js");

const {AccountLayout,} = splToken
const {sendAndConfirmTransaction} = web3;

// var encryptedAES = CryptoJS.AES.encrypt(data, "Pratik Saria");
// console.log(typeof encryptedAES);
// var decryptedBytes = CryptoJS.AES.decrypt(encryptedAES, "Pratik Saria");
// var plaintext = decryptedBytes.toString(CryptoJS.enc.Utf8);


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
// var fromWallet = web3.Keypair.fromSecretKey(DEMO_WALLET_SECRET_KEY);
var newsigner = await newAccountWithLamports(connection,1000000000)
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
  newsigner.publicKey
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
      newsigner.publicKey,
      [],
      0
    )
  );

   var encryptedAES = CryptoJS.AES.encrypt("Hello World", "Pratik Saria");
      transaction.add(await memoprogram.wriiteutf8(newsigner.publicKey,encryptedAES.toString()));
       console.log(`memo added  ${newsigner.publicKey}`);
// Sign transaction, broadcast, and confirm
var signature = await web3.sendAndConfirmTransaction(
  connection,
  transaction,
  [newsigner]
);
console.log("SIGNATURE",signature);
return signature;
console.log("SUCCESS");
}

  
  // Add instruction to write memo
// transaction.addInstruction(
//   MemoProgram.writeUtf8(feePayer.getPublicKey(),"Hello from SolanaJ :)")
// );


export async function RetriveMemo (sig:any) {
  var connection = new web3.Connection(web3.clusterApiUrl("devnet"));
  const res =await connection.getTransaction(sig);
  console.log("RES",res);
  // @ts-ignore: Object is possibly 'null'
  console.log(res.meta.logMessages[6])

  // var decryptedBytes = CryptoJS.AES.decrypt(encryptedAES, "Pratik Saria");
// var plaintext = decryptedBytes.toString(CryptoJS.enc.Utf8);
}

export async function TokenAccount (address:String) {
  var connection = new web3.Connection(web3.clusterApiUrl('devnet'))
  const key = new web3.PublicKey('498YdCwnQ9EPSQ76JEADbMEcAvczg2Bye382XfjP2SfM')
  const pubaddress = new web3.PublicKey(address)
  const res = await connection.getTokenAccountsByOwner(pubaddress,{mint:key})
  console.log("TOKENACCOUNT",res);
}


export async function Test_Name_Service(){
  const connection = new web3.Connection(web3.clusterApiUrl('devnet'))
  const keypair = new web3.Keypair()
  const address = keypair.publicKey;
  console.log("ADDRESS",address.toString());
  const secret = keypair.secretKey;
  const hashID = await connection.requestAirdrop(address, web3.LAMPORTS_PER_SOL)
    await connection.confirmTransaction(hashID);
  const payerKey = new web3.PublicKey('EbeourjESYjSB89KchMV3gozfgBBAyxKd1Zt5nkCwbJJ')
  const tx =await createNameRegistry(connection,"polkamusic",0,address,address)
  const signers = [
    {
      publicKey: address,
      secretKey:secret
    }
  ];

  const transact = new web3.Transaction().add(tx)
  console.log("Transaction",transact);
  const hash = await web3.sendAndConfirmTransaction(connection,
    transact,signers)
}


export function generate_keypair()
{
  const bStr = "PratikSaria123453256325145325633"
  var buf = Buffer.from(bStr, 'utf-8');
  console.log(buf.length);
  const keyPair = web3.Keypair.fromSeed(buf);
  console.log(keyPair.publicKey);
  console.log(keyPair.secretKey)
  console.log(buf);
}


