## extreme_go_horse_js

> Criado com intuito apenas para treinar algoritmos e Estruturas de dados.                       
Designed for training algorithms and data structures only.

### Implementando simulações de funções built-in metodos de array

```javascript

// Exemplo Map

Array.prototype.myMap = function(callback) {
    const tmpArray = [];
    if (!this.length) return [];
    else if (typeof callback !== 'function')
        return function() {
            throw new TypeError(
                'MyMap(function(a,b,c) {}), callback required a function'
            );
        };
    for (let i = 0; i < this.length; i++) {
        const currentValue = callback(this[i], i, [...this]);
        if (currentValue !== undefined) tmpArray[i] = currentValue;
    }
    if (!tmpArray.length) return [...this];
    return tmpArray;
};

```

#### Get deps :racehorse:
```sh
  npm i
  # or
  yarn
```
#### Run tests
```sh
npm test
# ou 
yarn test
```


#### :construction: Deps npm dev :rocket:
```json
{
  "scripts": {
    "test": "jest",
    "dev": "node index.js",
    "lint": "./node_modules/.bin/eslint --fix src/**/*.js"
  },
  "devDependencies": {
    "chai": "^4.2.0",
    "colors": "^1.4.0",
    "jest": "^24.9.0",
    "eslint": "^5.14.1",
    "eslint-config-airbnb-base": "^13.1.0",
    "eslint-config-prettier": "^4.0.0",
    "eslint-plugin-import": "^2.16.0",
    "eslint-plugin-prettier": "^3.0.1",
    "prettier": "^1.16.4"
}

```
#### implements
- [ ] default functions javascript :wrench:
- [ ] stack structs :wrench:
- [ ] queue structs :wrench:
