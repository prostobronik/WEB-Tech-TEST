exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(resolve => {
      setTimeout(() => resolve(value)); 
    });
  },

  manipulateRemoteData: function(url) {
      return fetch(url).
      then(resp => resp.json()).
      then(data => {
        const newData = [];
        for (let i=0; i<data.people.length; i++) {
          newData[i] = data.people[i].name;
        }
        return newData.sort();
      });
  }
};