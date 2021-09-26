// 找零钱

class MinCoinChange {
  constructor(coins) {
    this.coins = coins;
  }

  makeChange(amount) {
    let change = [];
    let total = 0;
    let len = this.coins.length;
    for (var i = len; i >= 0; i--) {
      let coin = this.coins[i];
      while (total + coin <= amount) {
        change.push(coin);
        total += coin;
      }
    }

    return change;
  }
}


const changeMoney = new MinCoinChange([1, 5, 10, 20, 50, 100]);
const rest = changeMoney.makeChange(97);
console.log(rest);


