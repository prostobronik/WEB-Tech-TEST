exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
     let index = -1;
    for (let i=0; i<arr.length; i++) {
      if (arr[i] === item) {
        index = i;
      }
    }
    return index;
  },

  sum: function(arr) {
    let sum = 0;
    for (let i =0; i<arr.length; i++) {
      sum+=arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    const newArr = [];
    let j = 0;
    for (let i=0; i<arr.length; i++) {
      if (arr[i] !== item) {
        newArr[j] = arr[i];
        j++;
      }
    }
    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    for (let i=0; i<arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate: function(arr) {
    const newArr = [];
    for (let i=0; i<arr.length-1; i++) {
      newArr[i] = arr[i];
    }
    return newArr;
  },

  prepend: function(arr, item) {
    const newArr = [];
    newArr[0] = item;
    for (let i=1; i<arr.length+1; i++) {
      newArr[i] = arr[i];
    }
    return newArr;
  },

  curtail: function(arr) {
    const newArr = [];
    let newIndex = 0;
    for (let i=1; i<arr.length; i++) {
      newArr[newIndex] = arr[i];
      newIndex++;
    }
    return newArr;
  },

  concat: function(arr1, arr2) {
    const newArr = [];
    let lastIndex = 0;
    for (let i=0; i<arr1.length; i++) {
      newArr[i] = arr1[i];
      lastIndex = i;
    }
    let newIndex = 0;
    for (let j=lastIndex+1; j<arr2.length+arr1.length; j++) {
      newArr[j] = arr2[newIndex];
      newIndex++;
    }
    return newArr;
  },

  insert: function(arr, item, index) {
    const newArr = [];
    for (let i=0; i<arr.length; i++) {
      newArr[i] = arr[i];
      if (i === index) {
        newArr[i] = item;
        break;
      }
    }
    for (let i=index+1; i<arr.length+1; i++){
      newArr[i] = arr[i-1];
    }
    return newArr;
  },

  count: function(arr, item) {
    let counter = 0;
    for (let i=0; i<arr.length; i++) {
      if (arr[i] === item) {
        counter++;
      }
    }
    return counter;
  },

  duplicates: function(arr) {
    const dupl = [];
    let duplIndex = 0;
    for (let i=0; i<arr.length; i++) {
      for (let j=0; j<arr.length; j++) {
        if (i!==j && arr[i] === arr[j]) {
            let index = -1;
            for (let d =0; d<dupl.length; d++) {
              if (dupl[d]===arr[i]) {
                index = d;
              }
            }
            if (index === -1) {
              dupl[duplIndex] = arr[i];
              duplIndex++;
            }

        }
      }
    }
    return dupl;
  },

  square: function(arr) {
    const newArr = [];
    for (let i=0; i<arr.length; i++){
      newArr[i] = arr[i]*arr[i];
    }
    return newArr;
  },

  findAllOccurrences: function(arr, target) {
    const newArr = [];
    let j = 0;
    for (let i=0; i<arr.length; i++){
      if (arr[i] === target) {
        newArr[j] = i;
        j++;
      }
    }
    return newArr;
  }
};