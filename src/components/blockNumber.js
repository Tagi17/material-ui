const {Web3} = require('web3');

const getLatestBlockNumber = async () => {
  try {
    const projectId = '3f67af2ab5f343b4b0b274f3bc453980';
    // const web3 = new Web3('https://mainnet.infura.io/v3/${projectId}');
    const web3 = new Web3(`https://mainnet.infura.io/v3/${encodeURIComponent(projectId)}`);
    const latestBlockNumber = await web3.eth.getBlockNumber();
    console.log('Latest Block Number:', latestBlockNumber);
    return latestBlockNumber;
  } catch (error) {
    console.error('Error fetching latest block number:', error);
    throw error;
  }
};

module.exports = { getLatestBlockNumber };
