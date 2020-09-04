function checkCashRegister(price, cash, cid) {
    // FILL THE REGISTER
    let register = {};
    for (let el of cid) {
        let [unit, amount] = el;
        register[unit] = amount;
    }

    let totalInRegister = Object.values(register).reduce((a, b) => a + b, 0)
    let remainder = cash - price;

    // console.log('REMAINDER: ', remainder);
    // console.log('IN REGISTER: ', totalInRegister);

    // CHECK IF REGISTER HAS ENOUGH
    let result = {};
    if (totalInRegister < remainder) {
        result.status = 'INSUFFICIENT_FUNDS';
        result.change = [];
        return result;
    }

    if (totalInRegister === remainder) {
        result.status = 'CLOSED';
        result.change = Object.entries(register);
        return result;
    }

    let change = {};

    function updateRegister(unit, amount) {
        register[unit] -= amount;
        addToChange(unit, amount)
        updateRemainder(amount)
    }
    function addToChange(unit, amount) {
        change[unit] = (change[unit] || 0) + (amount * 100);
    }
    function updateRemainder(amount) {
        remainder -= amount;

    }

    while (remainder > 0) {
        remainder = remainder.toFixed(2);

        if (remainder >= 100) {
            if (register['ONE HUNDRED']) {
                updateRegister('ONE HUNDRED', 100)
                continue;
            }
        }
        if (remainder >= 20) {
            if (register['TWENTY']) {
                updateRegister('TWENTY', 20)
                continue;
            }
        }
        if (remainder >= 10) {
            if (register['TEN']) {
                updateRegister('TEN', 10)
                continue;
            }
        }
        if (remainder >= 5) {
            if (register['FIVE']) {
                updateRegister('FIVE', 5)
                continue;
            }
        }
        if (remainder >= 1) {
            if (register['ONE']) {
                updateRegister('ONE', 1)
                continue;
            }
        }
        if (remainder >= 0.25) {
            if (register['QUARTER']) {
                updateRegister('QUARTER', 0.25)
                continue;
            }
        }
        if (remainder >= 0.1) {
            if (register['DIME']) {
                updateRegister('DIME', 0.1)
                continue;
            }
        }
        if (remainder >= 0.05) {
            if (register['NICKEL']) {
                updateRegister('NICKEL', 0.05)
                continue;
            }
        }
        if (remainder >= 0.01) {
            if (register['PENNY']) {
                updateRegister('PENNY', 0.01)
                continue;
            }
        }

        result.status = 'INSUFFICIENT_FUNDS';
        result.change = [];
        return result;

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

