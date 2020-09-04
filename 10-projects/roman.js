function convertToRoman(num) {
    const roman = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M',
    }

    let romanStr = '';

    for (let key of Object.keys(roman).reverse()) {
        while (num - key >= 0) {
            romanStr += roman[key];
            num -= key;
        }
    }

    return romanStr;
}

let a = convertToRoman(3998);
console.log(a)
