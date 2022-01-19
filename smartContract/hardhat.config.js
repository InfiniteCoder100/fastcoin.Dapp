//https://eth-ropsten.alchemyapi.io/v2/pyINJSNrTnfk4M_7SxN6VqnUuNKPjwp9
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/pyINJSNrTnfk4M_7SxN6VqnUuNKPjwp9',
      accounts: ['17d4df3af9da048b90a2ac26194f702562e516141a0c78b917d628343127e0b8'],
    },
  },
}
