exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let repeatCounter = 0;
    let newstr = "";
    let tmp = amount;
    for (let i=0; i<str.length; i++) {
      repeatCounter++;
      if (str[i] !== str[i+1]) {
        if (repeatCounter<amount) {
          amount = repeatCounter;
        }
        for (let j = 0; j<amount; j++) {
          newstr+=str[i];
        }
        repeatCounter = 0;
        amount = tmp;
      }
    }
    return newstr;
  },

  wordWrap: function(str, cols) {
    const strArr = str.split(' ');
    let newStr = strArr[0];

    for (let i = 1; i < strArr.length; i++) {
      if (strArr[i].length > cols)
        newStr += '\n' + strArr[i];
      else if (newStr.length + strArr[i].length > cols)
        newStr += '\n' + strArr[i];
      else
        newStr += ' ' + strArr[i];
    }

    return newStr;
  },

  reverseString: function(str) {
    let newstr="";
    for (let i=str.length-1; i>=0; i--) {
      newstr+=str[i];
    }
    return newstr;
  }
};