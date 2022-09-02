// Cash Register

// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)

// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

const currency = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  DOLLAR: 1.0,
  FIVE: 5.0,
  TEN: 10.0,
  TWENTY: 20.0,
  "ONE HUNDRED": 100.0,
};

const changeStatus = {
  insufficient: "INSUFFICIENT_FUNDS", // change due > cid
  closed: "CLOSED", // change due === cid
  open: "OPEN", // change due < cid
};

function checkCashRegister(
  price: number,
  cash: number,
  cid: [string, number][]
): { status: string; change: [string, number][] } {
  const register = cid.reverse();

  const changeDue = cash - price;
  const totalMoney = Number(
    cid
      .reduce((acc: number, cur: [string, number]) => {
        acc += cur[1];
        return acc;
      }, 0)
      .toFixed(2)
  );

  if (changeDue > totalMoney) {
    return { status: changeStatus.insufficient, change: [] };
  }

  return {
    status: totalMoney === changeDue ? changeStatus.closed : changeStatus.open,
    change:
      totalMoney === changeDue
        ? cid.reverse()
        : calcChange(changeDue, register),
  };
}

const calcChange = (change, register: [string, number][]) => {
  const changeInCurrency = [];
  register.forEach((key) => {
    let count = change;
    if (currency[key[0]] < change) {
      const totalCoin = Number((key[1] / currency[key[0]]).toFixed());
      if (totalCoin > change) {
        let num = (change / currency[key[0]]) * currency[key[0]];
        count = count - num;
        if (count >= num) changeInCurrency.push([key[0], num]);
      }
    }
  });
  return changeInCurrency;
};

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
/* should return 
{
	status: "OPEN", 
	change: [["QUARTER", 0.5]]
}
*/

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
/*  should return 
{
	status: "OPEN", 
	change: [
		["TWENTY", 60], 
		["TEN", 20], 
		["FIVE", 15], 
		["ONE", 1], 
		["QUARTER", 0.5], 
		["DIME", 0.2], 
		["PENNY", 0.04]]
	}
*/

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
/*  should return 
{
	status: "INSUFFICIENT_FUNDS",
	change: []
}.
*/

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
/*  should return 
{
	status: "INSUFFICIENT_FUNDS",
	change: []
}.
*/

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
// should return
/* {
	status: "CLOSED",
	change: [
		["PENNY", 0.5],
		["NICKEL", 0],
		["DIME", 0],
		["QUARTER", 0],
		["ONE", 0],
		["FIVE", 0],
		["TEN", 0],
		["TWENTY", 0],
		["ONE HUNDRED", 0]]
	}.
 */
