//1.
function kilometerToMeter(kilo){
    var meter = kilo*1000;
    return meter;
}
var convert = kilometerToMeter(12);
console.warn(convert);

//2
function budgetCalculator(ram, sam, jodu) //ram = clock , sam = mobile , jodu = laptop//
{
    var clock = 50 * ram;
    var mobile = 100 * sam;
    var laptop = 500 * jodu;

    var total_price = clock + mobile + laptop;
    return total_price;
}
    var result = budgetCalculator(10, 5, 3);
    console.log(result);

//3.
function hotelCost(number){
    if(number<=10){
    var cost = number * 100;
    return cost;
    }
    else if(number>10 && number<=20){
    var cost2 = ((number-10) * 80) + (10 * 100);
    return cost2;
    }
    else{
    var cost3 = ((number - 20) * 50) + (10 * 80) + (10 * 100);
    return cost3;
    }
}   
    var result = hotelCost(25);
    console.log(result);

//4.
function megaFriend(name)
    {
        var max_string = name[0].length;
        var max = name[0];
        for (var i = 1; i < name.length; i++) {
            var element = name[i].length;
            if (element > max_string) {
                max = name[i];
                max_string = element;
        }
    }
        return max;
      }
var result = megaFriend(["rahim", "abul", "must", "karim"]);
console.log(result);
