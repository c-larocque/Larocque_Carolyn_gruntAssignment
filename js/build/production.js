var myApp = {
  // we could put module-specific global variables here
  mainMessage : "Welcome to the app!",

  mainGreeting() {
    console.log('Hey! Welcome to the app! This is awesome');
  }
};

myApp.module1 = {
  // this would be a feature-specific module, like all things video
  saySomething(message) {
    console.log(myApp.mainMessage, message, `I'm the second file!`);
  },

  doSomething() {
    console.log('called module1 doSomething', 'hey, this just changed!');
  }
};

myApp.module2 = {
  // add another module
  doSomethingElse() {
    console.log('called doSomethingelse from module 2', 'changing this file');
  }
};

(() => {
  myApp.mainGreeting();

  myApp.module1.saySomething('sup, yo!');

  function myFunc() {
    var theHeading = document.querySelector('h1');

    theHeading.textContent = myApp.mainMessage;
  }

  function someOtherFunc() {
    // stub
  }

  myFunc();

})();
