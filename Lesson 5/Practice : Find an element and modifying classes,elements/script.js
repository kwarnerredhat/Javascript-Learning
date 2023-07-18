const headingElement = document.querySelector("h1");
const paragraphElement = document.querySelector("paragraph1");
const divElement = document.querySelector(".container");
const buttonELement = document.querySelector("myButton");

headingElement.textContent = "Hello from Redhat";
paragraphElement.style.color = "green";
divElement.innerHTML ="<p> I love RedHat</p>";

buttonELement.addEventListener("click, function() {
    alert("Button clicked");
});
