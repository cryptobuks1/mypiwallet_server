const Web3 = require('pweb3'); 

const web3 = new Web3('http://46.4.199.148:6969/pchain');

export function getBlockNumber(){
    
    return  web3.pi.getBlockNumber() ;
}