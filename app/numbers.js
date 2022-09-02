exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    num = num.toString(2);
    return +(num[num.length - bit]);
  },

  base10: function(str) {
    return +parseInt(str, 2);
  },

  convertToBinary: function(num) {
    let bin = num.toString(2);
    while (bin.length < 8) {
      bin = '0' + bin;
    }
    return bin;
  },

  multiply: function(a, b) {
    a *= 1000;
    b *= 1000;
    return a * b / 1000000;
  }
};