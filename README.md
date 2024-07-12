# ZKC - ZK KOL Contract with AI Audit
github link: https://github.com/MartinYeung5/20240623_aptos_ZKC
contract address: 0x862df6b2346463039589216fb84b4618b76f2b4e8bd479555863d8ea51606501

## About this project
The project aims to provide a solution for KOL(influencer) to handle general collaboration with other parties on digital contract utilizing ZK contract with AI audit. 

1. ZK function can increase privacy protection on contract verification.
2. AI audit an help user to detect the potential risk in contract.

Actually, KOL may not have professional knowledge on how to prepare the contract, check the contract content in order to protect their benefit. 

Moreover, digital contract can be one of the digital asset, and move language can create more value on digital asset protection and usage.

Furthermore, ZK function can help verify the contract and personal identity with better privacy protection.

## AKINDO Links
https://app.akindo.io/communities/aAEpW1EXKHdJXv9K/products/nPgNXKooJc0v0kNDq

## Schedule
1. Add multied25519
2. Optimize smart contract
3. Optimize UI desgin
4. ZK function implementation
5. bug fix

## Status (Updating)
20240706
1. Optimize the smart contract (move)
2. Add connect function (allows users to log in with a Google ID without needing an MPC Network, Magic Links, or Windows passkey)
20240707
1. update "@aptos-labs/wallet-adapter-react": "^3.4.3"

## Bug fixed
20240701
1. wallet connection (brave broswer)

## Bug
20240707
1. const owner2Authenticator = aptos.transaction.sign({ signer: owner2, transaction: { rawTransaction } });
* Error Msg:
Type '{ rawTransaction: RawTransaction; }' is not assignable to type 'AnyRawTransaction'.
  Type '{ rawTransaction: RawTransaction; }' is missing the following properties from type 'MultiAgentTransaction': secondarySignerAddresses, serialize, bcsToBytes, bcsToHexts(2322)
index.d.ts(5628, 9): The expected type comes from property 'transaction' which is declared here on type '{ transaction: AnyRawTransaction; senderAuthenticator: AccountAuthenticator; feePayerAuthenticator?: AccountAuthenticator | undefined; }'

