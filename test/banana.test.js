const { expect } = require("chai");

describe("Banana", () => {
  it("Should return price", async () => {
    const MyContract = await ethers.getContractFactory("Banana");
    const myContract = await MyContract.deploy(12, 10, 200);

    await myContract.deployed();
    expect(await myContract.getPrice()).to.equal(10);
  });
  it("should change the price when requested", async () => {
    const MyContract = await ethers.getContractFactory("Banana");
    const myContract = await MyContract.deploy(12, 10, 200);

    await myContract.setPrice(5);
    expect(await myContract.getPrice()).to.equal(5);
  });
  it("Should return quantity", async () => {
    const MyContract = await ethers.getContractFactory("Banana");
    const myContract = await MyContract.deploy(12, 10, 200);

    await myContract.deployed();
    expect(await myContract.getQuantity()).to.equal(200);
  });
  it("should change the quantity when requested", async () => {
    const MyContract = await ethers.getContractFactory("Banana");
    const myContract = await MyContract.deploy(12, 10, 200);

    await myContract.setQuantity(400);
    expect(await myContract.getQuantity()).to.equal(400);
  });
});
