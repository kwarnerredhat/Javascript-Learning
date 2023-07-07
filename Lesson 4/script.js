const shoes = {
    type: "Rick Owens",
    size: 12,
    Fashion: "Designer",
    saySize: function() {
        
        console.log("The shoe size is" + this.size);
        console.log("The shoe type are" + this.type);
    }
};
shoes.saySize();
const type = new Object();
type.name = 'Rick Owens';
type.Fashion = 'Designer';
type.size = 12;


console.log(type.name); 

var query = "fashion";

console.log(type['fashion']);


