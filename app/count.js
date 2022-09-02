exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let timer;

    function counter () {
      if (start <= end) {
        console.log(start);
        timer = setTimeout(counter, 100);
        start++;
      }
    }

    counter();

    return {
      cancel: function() {
        clearTimeout(timer);
      }
    };
  }
};