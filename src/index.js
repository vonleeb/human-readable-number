module.exports = function toReadable (number) {
    const digitMap = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
    }
    const twoDigitMap = {
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
      100: 'hundred',
    }
  
    let result = '';
    const numberBy100 = Math.trunc(number / 100);
    const lastNumberBy100 = number % 100;

    if (number === 0) {
        return digitMap[number];
    }
    
    if (numberBy100 > 0) {
      result += digitMap[numberBy100] + ' ' + twoDigitMap[100];
    }
     
      const numberBy10 = Math.trunc(lastNumberBy100 / 10);
      const lastNumberBy10 = lastNumberBy100 % 10;
      console.log(numberBy100, lastNumberBy100, numberBy10, lastNumberBy10);
      if (numberBy10 * 10 < 20 && numberBy10 * 10 !== 0) {
          result += ' ' + twoDigitMap[lastNumberBy100];
      } else if (numberBy10 === 0 && lastNumberBy10 === 0) {
        //nothing;
      } else if (lastNumberBy10 === 0) {
          result += ' ' + twoDigitMap[numberBy10 * 10];
      } else if (numberBy10 === 0 && lastNumberBy10 > 0) {
          result += ' ' + digitMap[lastNumberBy10];
          console.log(lastNumberBy10, digitMap[lastNumberBy10]);
      } else {
          result += ' ' + twoDigitMap[numberBy10 * 10];
          result += ' ' + digitMap[lastNumberBy10];
      }
  
    return result.trim();
  }
