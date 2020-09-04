function convertToRoman(num) {
    const roman = {
        1: 'I',
        5: 'V',
        10: 'X',
        40: 'IL',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M',
    }

    let romanStr = '';
    let endsWith4 = false;
    let endsWith9 = false;

    while (num - 10 >= 0) {
        romanStr += roman[10];
        num = num - 10;
    }
    while (num - 5 >= 0) {
        romanStr += roman[5];
        num = num - 5;
    }
    let i = 0;
    while (num - 1 >= 0) {
        i++;
        if (i > 3) {
            if (romanStr.includes('III')) {
                romanStr = romanStr.replace('III', 'IV')
            }
        } else {
            romanStr += roman[1];
            num = num - 1;
        }
    }

    return romanStr;

}

let a = convertToRoman(12);
console.log(a)
