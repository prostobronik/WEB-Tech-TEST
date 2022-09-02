exports = typeof window === 'undefined' ? global : window;

exports.logicalOperatorsAnswers = {
  or: function(a, b) {
    if (+a + +b > 0) {
      return true;
    }
    else if (+a + +b === 0) {
      return false;
    }
  },

  and: function(a, b) {
    if (+a * +b > 0) {
      return true;
    }
    else if (+a * +b === 0) {
      return false;
    }
  }
};