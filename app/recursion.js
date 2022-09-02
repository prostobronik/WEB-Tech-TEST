exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    const result = [];
      function checkFiles(data) {
        return data.files.forEach(item => {
          if (item.files) {
            checkFiles(item);
          } 
          else {
            if (dirName) {
              const file = item.split('.');
              if (file[file.length-1] === dirName) {
                result.push(item);
              }
            } 
            else {
              result.push(item);
            }
          }
        });
      };
  
      checkFiles(data);
  
      return result;
  },

  permute: function(arr) {
    const resultArr = [];
    function permutation(arr, start, end) {
      if (start === end) {
        resultArr[resultArr.length] = arr.slice();
        return;
      }
      for (let i = start; i < end; i++) {
        let temp = arr[start];
        arr[start] = arr[i];
        arr[i] = temp;
        permutation(arr, start + 1, end);
        temp = arr[i];
        arr[i] = arr[start];
        arr[start] = temp;
      }
    }
    permutation(arr, 0, arr.length);
    return resultArr;
  },

  fibonacci: function(n) {
    let first = 0;
    let second = 1;
    for (let i = 2; i <= n; i++) {
      let curr = first + second;
      first = second;
      second = curr;
    }
    return second;
  },

  validParentheses: function(n) {
    const result = [];
    setCombinations(0, 0, '');
    function setCombinations(left, right, combination) {
      if (combination.length == n * 2) {
        result[result.length] = combination;
        return;
      }
      if (left < n) 
        setCombinations(left + 1, right, `${combination}(`);
      if (right < left)
        setCombinations(left, right + 1, `${combination})`);
    }
    return result;
  }
};