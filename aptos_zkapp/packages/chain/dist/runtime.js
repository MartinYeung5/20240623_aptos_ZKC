import { Balance } from "@proto-kit/library";
import { Balances } from "./balances";
export const modules = {
    Balances,
};
export const config = {
    Balances: {
        totalSupply: Balance.from(10000),
    },
};
export default {
    modules,
    config,
};
