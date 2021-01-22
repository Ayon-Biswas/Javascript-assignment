//1.
// function kilometerToMeter(kilo){
//     var meter = kilo*1000;
//     return meter;
// }
// var convert = kilometerToMeter(12);
// console.warn(convert);

//4.
var friends = ["arindom", "rudra", "shuvo","sumaiya","ayon"];
function megaFriend (friends){
 var name = friends[0];
 for(var i = 0; i<friends.length;i++){
 var element = friends[i];
 if(element > name){
    name = element;
 }
 }
return name;
}
var result = megaFriend(name);
console.warn(result);