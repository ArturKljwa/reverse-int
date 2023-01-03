module.exports = function reverse (n) {
    let result = '';

    let str  =  Math.abs(n) + '';

    for (let i = str.length - 1; i >= 0 ; i--) {
      result += str[i]
    }
    if (result[0] == 0) {
      return result.substring(1)
    }
     else {
      return result
   }
   }

