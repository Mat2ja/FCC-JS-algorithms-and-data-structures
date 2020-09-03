function checkCashRegister(price, cash, cid) {
    var denom = [
        { name: "ONE HUNDRED", val: 100.0 },
        { name: "TWENTY", val: 20.0 },
        { name: "TEN", val: 10.0 },
        { name: "FIVE", val: 5.0 },
        { name: "ONE", val: 1.0 },
        { name: "QUARTER", val: 0.25 },
        { name: "DIME", val: 0.1 },
        { name: "NICKEL", val: 0.05 },
        { name: "PENNY", val: 0.01 }
    ];

    // FILL THE REGISTER
    let register = {};
    for (let el of cid) {
        let [unit, amount] = el;
        register[unit] = amount;
    }

    let totalInRegister = Object.values(register).reduce((a, b) => a + b, 0)
    let remainder = cash - price;


    let result = { status: null, change: [] };
    // CHECK IF REGISTER HAS ENOUGH

    if (totalInRegister < remainder) {
        result.status = 'INSUFFICIENT_FUNDS';
        return result;
    }

    if (totalInRegister === remainder) {
        result.status = 'CLOSED';
        result.change = Object.entries(register);
        return result;
    }

    let change = {};

    while (remainder > 0) {
        remainder = remainder.toFixed(2);

        let insufficient = false;

        // todo
        for (let coin of denom) {
            if (remainder >= coin.val) {
                if (register[coin.name]) {
                    register[coin.name] -= coin.val;
                    change[coin.name] = (change[coin.name] || 0) + (coin.val * 100);
                    remainder -= coin.val;

                    break;
                } else {
                    if (coin.name === 'PENNY') {
                        insufficient = true;
                    }
                }
            }
        }
        if (insufficient) {
            result.status = 'INSUFFICIENT_FUNDS';
            result.change = [];
            return result;
        }

    }

    for (let unit in change) {
        change[unit] /= 100;
    }

    result.status = 'OPEN';
    result.change = Object.entries(change);

    return result;
}


let a = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

let b = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

let c = checkCashRegister(19.5, 20, [["PENNY", 0.4], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 100]]);

let d = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

let e = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

