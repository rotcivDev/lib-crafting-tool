(function () {
  class SimpleExample {
    constructor() {
      this.logMessage = this.logMessage.bind(this);
      this.writeMessage = this.writeMessage.bind(this);
    }

    logMessage(message) {
      console.log(message);
    }

    writeMessage(message) {
      document.write(message);
    }
  }
  window.SimpleExample = SimpleExample;
})();
