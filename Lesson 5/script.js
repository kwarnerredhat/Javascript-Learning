querySelector(selectors)
const el = document.body.querySelector(
    "style[type='text/css'], style:not([type])",
  );
  const parentElement = document.querySelector("#parent");
  let allChildren = parentElement.querySelectorAll(":scope > span");
  allChildren.forEach((item) => item.classList.add("red"));
  const baseElement = document.querySelector("p");
  document.getElementById("output").innerHTML =
    baseElement.querySelector("div span").innerHTML;
      