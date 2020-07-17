// feetToMile
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile
}

// woodCalculator
function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}

// tinyFriend
function tinyFriend(numbers) {
    var lowest = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        var currentNumber = numbers[i];
        if (currentNumber < lowest){
            lowest = currentNumber;
        }
    }
    return lowest;
}