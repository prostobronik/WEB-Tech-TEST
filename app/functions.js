exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function (str2) {
      let newstr = `${str}, ${str2}`;
      return newstr;
    }
  },

  makeClosures : function(arr, fn) {
    const newArr = [];
    let closure = function(item) {
      return function() {
        return fn(item);
      };
    };
    for (let i = 0; i< arr.length; i++) {
      newArr[i] = closure(arr[i]);
    }
    return newArr;
  },

  partial : function(fn, str1, str2) {
    return function(punctuation) {
      return fn(str1, str2, punctuation);
    };
  },

  useArguments: function() {
    let sum = 0;
    for (let i=0; i<arguments.length; i++) {
      sum+=arguments[i];
    }
    return sum;
  },

  callIt: function(fn) {
    const args = [];
    for (let i=1; i<arguments.length; i++) {
      args[i-1] = arguments[i];
    }
      return fn(...args);
  },

  partialUsingArguments: function(fn) {
    const args = [];
    let argsIndex = arguments.length-1;
    for (let i=1; i<arguments.length; i++) {
      args[i-1] = arguments[i];
    }
    return function () {
      for (let j=0; j<arguments.length; j++) {
        args[argsIndex] = arguments[j];
        argsIndex++;
      }
      return fn(...args);
    }
  },

  curryIt: function(fn) {
      const args = [];
      let argsIndex = 0;
      return function curried(arg){
          args[argsIndex] = arg;
          argsIndex++;
          if (args.length < fn.length){
              return curried;
          }
          return fn.apply(null, args);
      };
  }
};