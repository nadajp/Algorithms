function convertToRoman(num) {
    let lookup = {
        900 : 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90 : 'XC',
        50 : 'L',
        40 : 
    }
    let result = []
    while (num > 0) {
      if (num >= 1000) {
        let n = Math.floor(num/1000)
        for (let i = 0; i <n; i++) {
          result.push('M')
          num -= 1000
        }
      }
      else if (num >= 900) {
        result.push('CM')
        num-= 900
      } else if (num >= 500) {
        result.push('D')
        num -= 500
      } else if (num >= 400) {
        result.push('CD') 
        num -= 400
      } else if (num >= 100) {
        result.push('C')
        num -= 100
      } else if (num >= 90) {
        result.push('XC')
        num -= 90
      } else if (num >= 50) {
        result.push('L')
        num -= 50
      } else if (num >= 40) {
        result.push('XL')
        num -= 40
      } else if (num >= 10) {
        result.push('X')
        num -= 10
      } else if (num >= 9) {
        result.push('IX')
        num -= 9
      } else if (num >= 5) {
        result.push('V')
        num -= 5
      } else if (num >= 4) {
        result.push('IV')
        num -= 4
      } else {
        for (let i = 0; i < num; i ++) {
          result.push('I')
          num-= 1
        }
      }
    }
   return result.join('');
  }
  
  convertToRoman(36);
  
  console.log(convertToRoman(36))