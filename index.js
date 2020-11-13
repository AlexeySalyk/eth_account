var Web3 = require('web3');
var web3 = new Web3();

class Account {
    constructor(name) {
        if (!secret) throw new Error("call setSecret() before use");
        this.name = name;
        this.PK = getPrivateKey(name);
        this.address = getAddressFromPK(this.PK);
        this.addressHash = web3.utils.sha3(this.address.slice(2), { encoding: 'hex' });
    }
}

var secret;

/**
 * @param {string} secretPhrase secret with which private keys will be generated
 * @param {string} secretHash use it to check the correctness of entering the secret phrase
 */
function setSecret(secretPhrase, secretHash = null) {
    if (secretPhrase.length < 8) throw new Error("Secret phrase need be minimum 8 digits");
    if (secretHash && secretHash != web3.utils.sha3(secretPhrase)) throw new Error("Secret phrase is not correspond to secret hash");
    secret = secretPhrase;
}

function getPrivateKey(phrase) {

    if (secret == null) throw new Error("call setSecret() before use");  
    var param = secret + phrase;    
    return (web3.utils.sha3(param));
}

function getAddressFromPK(privateKey) {
    return web3.eth.accounts.privateKeyToAccount(privateKey).address;   
}

module.exports = {
    Account: Account,
    setSecret: setSecret
};
