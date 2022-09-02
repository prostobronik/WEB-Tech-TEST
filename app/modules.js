exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    function Module(message, name){
      this.greeting = message;
      this.name = name;
      this.sayIt = function(){
        return `${this.greeting}, ${this.name}`;
      };
    }
    return new Module(str1,str2);
  }
};