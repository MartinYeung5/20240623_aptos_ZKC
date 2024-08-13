# ZKC - ZK KOL Contract with AI Audit
* github link: https://github.com/MartinYeung5/20240623_aptos_ZKC
* network: testnet
* link: https://explorer.aptoslabs.com/account/0x86adc9e2857e9ece1a99f4de87fb41e33591562ee1f80e4351404e47bd8bc778/modules/code/ContractDatabase?network=testnet
* contract address: 0x86adc9e2857e9ece1a99f4de87fb41e33591562ee1f80e4351404e47bd8bc778

## About this project
The project aims to provide a solution for KOL(influencer) to handle general collaboration with other parties on digital contract utilizing ZK contract with AI audit. 

1. ZK function can increase privacy protection on contract verification.
2. AI audit an help user to detect the potential risk in contract.

Actually, KOL may not have professional knowledge on how to prepare the contract, check the contract content in order to protect their benefit. 

Moreover, digital contract can be one of the digital asset, and move language can create more value on digital asset protection and usage.

Furthermore, ZK function can help verify the contract and personal identity with better privacy protection.

## AKINDO Links
https://app.akindo.io/communities/aAEpW1EXKHdJXv9K/products/nPgNXKooJc0v0kNDq

## Schedule/Milestone
1. Add multied25519
2. Optimize smart contract
3. Optimize UI desgin
4. Update ZK function implementation
5. bug fix
6. Add verification function

## Achievement

## Status (Updating)
20240706
1. Optimize the smart contract (move)
2. Add connect function (allows users to log in with a Google ID without needing an MPC Network, Magic Links, or Windows passkey)
20240707
1. update "@aptos-labs/wallet-adapter-react": "^3.4.3"

20240713
1. update ZK section - using Protokit Framework

20240714
1. update "@aptos-labs/ts-sdk" to version "^1.26.0"

20240715
1. develop verification function based on Protokit Framework

20240717
1. add new function for user to view the sign status of the contract

20240718
1. remove all "rawTransaction" (frontend), Bug fixed

20240719
1. AI section: expect to use AWS to develop AI model and related service

20240721
1. add new fucntion - check contract list (which is created by other and is waiting you [expected signer] for sign)

20240722
1. function optimization - check contract list. User can input the address of contract creator and check the contract list. if you are one of expected signer from teh contract, you will see the contract in contract list.
2. create new page - ContractListByOther.tsx
3. function optimization - check contract list. When user signed the contract, the checkbox will be disable on the contract list.

20240723
1. add new function - check contract validity.
* if the contract is valid, will display the message " Contract Valid", otherwise, will display the message " Wrong Contract".

20240724
1. optimize UI design - check contract list
2. fixed the bug - checking contract data is signed or not
3. fixed contract bug - assert!(contract_record.sign == true, ETASK_IS_COMPLETED)

20240725
1. optimize move contract - fixed bug

20240726
1. optimize move contract - setup new assertion

20240727
1. fixed the bug - refresh the page when user create own contract list

20240728
1. optimize move contract - contract sign
2. optimize move contract - contract can upgrade

20240730
1. optimize move contract - contract sign

20240801
1. optimize zk logic

20240803
1. optimize zk logic

20240805
1. The Protokit Framework is upgraded
2. using Aptos Indexer API with Nodit
3. usecase test

20240807
1. optimize Protokit Framework with different tests

20240808
1. update Move contract

20240809
1. using Nodit - add multisig function (testing)

20240810
1. using Nodit - add Aptos NODE API (successful), tested over 200 times

20240813

## Screen Cap
* main page
![alt text](https://github.com/MartinYeung5/20240623_aptos_ZKC/blob/main/aptos_frontend/public/frontend_screencap_01.png?raw=true)
* wallet login
![alt text](https://github.com/MartinYeung5/20240623_aptos_ZKC/blob/main/aptos_frontend/public/frontend_screencap_02.png?raw=true)

## Bug/Problem or fixed record
20240701 
1. (fixed) wallet connection (brave broswer)

20240707
1. (fixed) const owner2Authenticator = aptos.transaction.sign({ signer: owner2, transaction: { rawTransaction } });
* Error Msg:
TS2322: Type '{ rawTransaction: RawTransaction; }' is not assignable to type 'AnyRawTransaction'.
  Type '{ rawTransaction: RawTransaction; }' is missing the following properties from type 'MultiAgentTransaction': secondarySignerAddresses, serialize, bcsToBytes, bcsToHexts(2322)
index.d.ts(5628, 9): The expected type comes from property 'transaction' which is declared here on type '{ transaction: AnyRawTransaction; senderAuthenticator: AccountAuthenticator; feePayerAuthenticator?: AccountAuthenticator | undefined; }'
* solution:
-upgrade "@aptos-labs/ts-sdk": "^1.26.0",
-remvoe all RawTransaction and change to transaction

20240711
1. when using Protokit Framework
* Error Msg:
POST http://localhost:8080/graphql net::ERR_CONNECTION_REFUSED

20240718
1. when refresh the website, OKX wallet will pop up and need user to login

20240727
1. refresh issue, need to reload the updated information

20240728
1. (fixed) smart contract issue: check the user's contract sign (updated)
2. (fixed) contractDatabase undefined (updated)
