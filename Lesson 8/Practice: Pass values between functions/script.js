const object = {
    name: "Khalil Warner",
    age: 22,
    role: "Software Engineer",
};
function displayName() {
    const outputElement = document.querySelector("output");
    outputElement.append(object.name);
    displayAge();
  }

  function displayAge() {
    const outputElement = document.querySelector("output");
    outputElement.append(`Age: ${object.age}`);
  }
  
  displayName();
  