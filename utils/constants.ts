import { createThirdwebClient, defineChain } from "thirdweb";
import { optimism } from "thirdweb/chains";

const secretKey = process.env.TW_SECRET_KEY;
export const CLIENT = createThirdwebClient({
    secretKey: secretKey as string,
});
export const CHAIN = defineChain( optimism );

export const erc721ContractAddress = process.env.CONTRACT_ADDRESS as string;