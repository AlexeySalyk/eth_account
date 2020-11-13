# eth_account
Ethereum account generator from secret phrase + salt

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install eth_account.

```bash
npm install eth_account
```

## Usage

```js
const AccManager = require('./index.js');
AccManager.setSecret('xxxxXXXX');
var eth_acc = new AccManager.Account('account1');

console.log(eth_acc);
```

## License

[MIT](https://choosealicense.com/licenses/mit/)