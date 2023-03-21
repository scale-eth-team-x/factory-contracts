import { ethers } from "hardhat";

async function main() {
  const FactoryAggregator = await ethers.getContractFactory("FactoryAggregator");

  // Start deployment, returning a promise that resolves to a contract object
  const factory_aggregator = await FactoryAggregator.deploy();
  console.log("Contract deployed to address:", factory_aggregator.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
