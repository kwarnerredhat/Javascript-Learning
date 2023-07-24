document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("khalilButton");
  const messageParagraph = document.getElementById("khalilMessage");
  function khalilEventListener() { 
 messageParagraph.textContent = "When it comes to fashion it is endless.";
  }
  button.addEventListener("click", khalilEventListener);
});