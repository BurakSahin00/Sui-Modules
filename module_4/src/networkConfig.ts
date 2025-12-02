import { getFullnodeUrl } from "@mysten/sui/client";
import { createNetworkConfig } from "@mysten/dapp-kit";

const { networkConfig, useNetworkVariable, useNetworkVariables } =
  createNetworkConfig({
    devnet: {
      url: getFullnodeUrl("devnet"),
      variables: {
        packageId: "0x256360bde9cb4517c01db6203376fbe9be59ae021161bea4f839890bb642ee7d", // TODO: Get package ID from instructor
      },
    },
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables: {
        packageId: "0x256360bde9cb4517c01db6203376fbe9be59ae021161bea4f839890bb642ee7d", // TODO: Get package ID from instructor
      },
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
      variables: {
        packageId: "0x256360bde9cb4517c01db6203376fbe9be59ae021161bea4f839890bb642ee7d", // TODO: Get package ID from instructor
      },
    },
  });

export { useNetworkVariable, useNetworkVariables, networkConfig };
