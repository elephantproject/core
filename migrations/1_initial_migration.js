const FACTORY = artifacts.require('UniswapV2Factory.sol')
// Globals//

const feesetter = process.env.FEESETTER

// test tokens //
const testwone = '0x7466d7d0C21Fa05F32F5a0Fa27e12bdC06348Ce2'
const testnetwbtc = '0x6c4387C4f570Aa8cAdcaFFc5E73ecb3D0F8Fc593'
const testnetbusd = '0x0E80905676226159cC3FF62B1876C907C91F7395'
const testnetlink = '0x2C6e26B2faD89bc52d043e78E3D980A08af0Ce88'
const testviper = '0x69a655c56087d927eb05247fb56495a0f19b9f70'
//mainnet tokens//
const wone = '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a'
const busd = '0xE176EBE47d621b984a73036B9DA5d834411ef734'
const btc = '0x3095c7557bCb296ccc6e363DE01b760bA031F2d9'
const usdc = '0x985458e523db3d53125813ed68c274899e9dfab4'
const link = '0x218532a12a389a4a92fC0C5Fb22901D1c19198aA'
const viper = '0xEa589E93Ff18b1a1F1e9BaC7EF3E86Ab62addc79'
const onemoon = '0xcb35e4945c7f463c5ccbe3bf9f0389ab9321248f'
const mochi = '0x0dd740db89b9fda3baadf7396ddad702b6e8d6f5'
const ada = ''
const eth = ''
const dot = ''

module.exports = async function(deployer, network) {
  if (network === 'mainnet0') {
    await deployer.deploy(FACTORY, feesetter)

    const factorydeployed = await FACTORY.deployed()

    const pool0 = await factorydeployed.createPair(wone, usdc)

    await console.log('WONE/USDC', pool0.logs[0].args.pair)
    await console.log('Factory Address', FACTORY.address)
  } else {
    await deployer.deploy(FACTORY, FEESETTER)
    const factorydeployed = await FACTORY.deployed()
    const pool0 = await factorydeployed.createPair(testwone, testnetbusd)

    await console.log('WONE/BUSD', pool0.logs[0].args.pair)
    await console.log('Testnet Factory Address', FACTORY.address)
  }
}
