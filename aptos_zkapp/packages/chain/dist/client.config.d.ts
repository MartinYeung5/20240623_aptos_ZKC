import { ClientAppChain } from "@proto-kit/sdk";
export declare const client: ClientAppChain<{
    Balances: typeof import("@proto-kit/library").Balances;
} & {
    Balances: typeof import("./balances").Balances;
}, import("@proto-kit/protocol").MandatoryProtocolModulesRecord & {
    TransactionFee: any;
}, {}, {
    GraphqlClient: typeof import("@proto-kit/sdk").GraphqlClient;
    Signer: typeof import("@proto-kit/sdk").AuroSigner;
    TransactionSender: typeof import("@proto-kit/sdk").GraphqlTransactionSender;
    QueryTransportModule: typeof import("@proto-kit/sdk").GraphqlQueryTransportModule;
    NetworkStateTransportModule: typeof import("@proto-kit/sdk").GraphqlNetworkStateTransportModule;
}>;
//# sourceMappingURL=client.config.d.ts.map