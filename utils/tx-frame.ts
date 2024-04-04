import { getContract } from 'thirdweb';
import { CHAIN, CLIENT, erc721ContractAddress } from './constants';
import { claimTo } from 'thirdweb/extensions/erc721'
import { erc721ContractABI } from './erc721ContractABI';
import { FrameValidationData } from '@coinbase/onchainkit';

export const getERC721PreparedEncodedData = async (
    walletAddress: string,
) => {
    // Get the contract
    const contract = await getContract({
        client: CLIENT,
        chain: CHAIN,
        address: erc721ContractAddress,
        abi: erc721ContractABI
    });

    // const tx = await prepareContractCall();
    const tx = await claimTo({
        contract: contract,
        to: walletAddress,
        quantity: BigInt(1),
    });
    
    const data = await tx.data;
    // @ts-ignore
    const encodedData = await data();

    // Return the encoded transaction data
    return encodedData;
};

export const getFarcasterAccountAddress = (
    interactor: FrameValidationData['interactor'],
) => {
    // Get the first verified account or the custody address
    return interactor.verified_accounts[0] ?? interactor.custody_address;
};