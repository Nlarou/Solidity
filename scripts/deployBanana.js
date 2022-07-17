async function main() {
  //   const MyContract = await ethers.getContractFactory("Banana");
  //   const myContract = await MyContract.deploy(12, 10, 200);

  //   console.log("My Contract of Banana deployed to:", myContract.address);

  const MyContract = await ethers.getContractFactory("Banana");
  const contract = await MyContract.attach(
    "0x5fbdb2315678afecb367f032d93f642f64180aa3"
  );
  const id = await contract.getId();
  const price = await contract.getPrice();
  const quantity = await contract.getQuantity();
  console.log(`id: ${id}`);
  console.log(`price: ${price}`);
  console.log(`quantity: ${quantity}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
