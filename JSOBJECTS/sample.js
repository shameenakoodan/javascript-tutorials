const simpleObj = function(c){
    this.city=c;
}

let live1 = new simpleObj("Brooklyn");
let live2 = new simpleObj("Bronx");
simpleObj.prototype.state="New York";
console.log(live1);
console.log(live2);

console.log(live2.prototype === live1.prototype);
console.log(live1.state);
live2.state="Georgia";
console.log(live2.state);
console.log(live1.state);

live1.weather="Rain";
console.log(live2.weather);
simpleObj.prototype.weather="Rain";
console.log(live2.weather);
console.log(live1.weather);