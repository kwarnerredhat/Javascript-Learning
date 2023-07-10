let color = "teal";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector("left .color-value").innerHTML = color;

color = "skyblue"

function headingColor() {
   let titleColor = "red";
    document.querySelector(".title").style.color = color;
    console.log("inside", titleColor);
}

headingColor();


document.querySelector(".right").style.backgroundColor = color;
document.querySelector("right .color-value").innerHTML = color;

