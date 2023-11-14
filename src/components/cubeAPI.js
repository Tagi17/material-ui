const {Web3} = require('web3')
const rpcURL = 'https://eth-mainnet.g.alchemy.com/v2/rfbxy-jkjqus_qmf4XiDDSfaMgCE2jmq';
const web3 = new Web3(new Web3.providers.HttpProvider(rpcURL));

const getLatestBlockInfo = async () => {
  try {
    web3.eth.defaultBlock = 'latest';
    const blockNumber = await web3.eth.getBlockNumber();
    console.log('Latest Block Number API:', blockNumber);
    const returnTransactionObjects = true; 
    const block = await web3.eth.getBlock('latest', returnTransactionObjects);
    console.log('Latest Block Hash API:', block.hash);
    // console.log('Transactions:', block.transactions);
    return {
      blockNumber,
      blockHash: block.hash,
      // transactions: block.transactions,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = { getLatestBlockInfo };
