function Khalil() {
    this.myProperty = 0;
    this.setValue = function (newValue) {
      this.myProperty = newValue;
    };
  }
const myInstance = new Khalil();
  myInstance.setValue(22);

  console.log(myInstance.myProperty); // Output: 42
  