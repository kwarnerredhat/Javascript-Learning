const brands = ["nike", "jordan,", "adidas", "new balance"];
console.log("Orignal Array:". brands);
brands.push("swiss");
console.log("Array after adding 'swiss':", brands);

const index = brands.indexOf("adidas");
console.log("Index of 'adidas in the array:", index);
let remove = "adidas"
brands.splice(index, 1);
console.log("Array after removing 'adidas' by index", brands);