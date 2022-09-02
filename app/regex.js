exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /[0-9]/.test(str);
  },

  containsRepeatingLetter: function(str) {
    return /([a-z])\1/i.test(str);
  },

  endsWithVowel: function(str) {
    return /[aeiou]$/i.test(str);
  },

  captureThreeNumbers: function(str) {
    const newstr = str.match(/(\d{3})/);
    if(newstr == null) return false;
    return newstr[0];
  },

  matchesPattern: function(str) {
    return /^\d{3}-\d{3}-\d{4}$/.test(str);
  },

  isUSD: function(str) {
    return (/^\$((\d{1,3},?(\d{3},?)*)|(\d{1,3}))(\.\d{2})?$/.test(str));
  }
};