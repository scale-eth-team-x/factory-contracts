import { ethers } from "hardhat";
import { expect } from "chai";

describe("FactoryAggregator", function () {

  let factoryAggregator: any;
  let factoryAddress: any;
  let factoryName: string;
  let factoryDescription: string;
  let audited: boolean;

  beforeEach(async function () {
    const FactoryAggregator = await ethers.getContractFactory("FactoryAggregator");
    factoryAggregator = await FactoryAggregator.deploy();
    await factoryAggregator.deployed();

    // Mock data
    factoryAddress = "0x519EAEb4fd8986E2BC8a23741F2BF84ffF3b2857";
    factoryName = "Test Factory";
    factoryDescription = "This is a test factory";
    audited = true;
  });

  it("addFactory function should add the given factory", async function () {
    await factoryAggregator.addFactory(factoryAddress, factoryName, factoryDescription, audited);

    const result = await factoryAggregator.getSingleFactory(factoryAddress);
    expect(result.factoryName).to.equal(factoryName);
    expect(result.factoryDescription).to.equal(factoryDescription);
    expect(result.audited).to.equal(audited);
  });

  it("getSingleFactory function should get the details of a single factory", async function () {
    await factoryAggregator.addFactory(factoryAddress, factoryName, factoryDescription, audited);

    const result = await factoryAggregator.getSingleFactory(factoryAddress);
    expect(result.factoryName).to.equal(factoryName);
    expect(result.factoryDescription).to.equal(factoryDescription);
    expect(result.audited).to.equal(audited);
  });

  it("getAllFactories function should get the details of all factories", async function () {
    await factoryAggregator.addFactory(factoryAddress, factoryName, factoryDescription, audited);

    const result = await factoryAggregator.getAllFactories();
    expect(result[0].factoryName).to.equal(factoryName);
    expect(result[0].factoryDescription).to.equal(factoryDescription);
    expect(result[0].audited).to.equal(audited);
  });
  
});
