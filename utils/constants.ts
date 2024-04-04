import { createThirdwebClient, defineChain } from "thirdweb";

const clientID = process.env.NEXT_PUBLIC_CLIENT_ID;
export const CLIENT = createThirdwebClient({
    clientId: clientID as string,
});
export const CHAIN = defineChain(10);

export const erc721ContractAddress = process.env.CONTRACT_ADDRESS as string;