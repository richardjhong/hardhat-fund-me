import { ethers, getNamedAccounts } from "hardhat";

const main = async () => {
    const { deployer } = await getNamedAccounts();
    const fundMe = await ethers.getContract("FundMe", deployer);
    console.log(`Got contract FundMe at ${fundMe.address}`);
    console.log("Funding contract...");
    const txResponse = await fundMe.fund({
        value: ethers.utils.parseEther("0.1"),
    });
    await txResponse.wait(1);
    console.log("Funded!");
};

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
