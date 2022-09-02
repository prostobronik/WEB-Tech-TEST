exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.apply(obj);
  },

  alterObjects: function(constructor, greeting) {
    return constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    const keys = [];
    let keysIndex = 0;
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys[keysIndex] = `${key}: ${obj[key]}`;
        keysIndex++;
      }
    }
    return keys;
  }
};