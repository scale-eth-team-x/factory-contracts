import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv'
dotenv.config()

const ALCHEMY_API_KEY: string = process.env.ALCHEMY_API_KEY ?? '';
const GOERLI_PRIVATE_KEY: string = process.env.GOERLI_PRIVATE_KEY ?? '';

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    },
    scroll: {
      url: `https://alpha-rpc.scroll.io/l2`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};

export default config;