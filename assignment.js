
// prblem-1
function kilometerToMeter(kilo) {
    var meter = kilo * 1000;
    return meter;

}
var countMeter = kilometerToMeter(177);


// problem-2
function budgetCalculator(phone, watch, laptop) {
    var phonePrice = 100;
    var totalPhonePrice = phone * phonePrice;

    var watchPrice = 300;
    var totalWatchPrice = watch * watchPrice;

    var laptopPrice = 500;
    var totalLaptopPrice = laptop * laptopPrice;

    var totalPrice = totalPhonePrice + totalWatchPrice + totalLaptopPrice;
    return totalPrice;
}
var products = budgetCalculator(5, 3, 2);


// problem-3
function hotelCost(day) {
    var rent = 0;
    if (day <= 10) {
        rent = day * 100;
    }
    else if (day <= 20) {
        var firstCount = 10 * 100;
        var remainingDays = day - 10;
        var secondCount = remainingDays * 80;
        rent = firstCount + secondCount;
    }
    else {
        firstCount = 10 * 100;
        secondCount = 10 * 80;
        remainingDays = day - 20;
        thirdCount = remainingDays * 50;
        rent = firstCount + secondCount + thirdCount;
    }
    return rent;
}
var stayingDays = hotelCost(23);


// prblem-4
function megaFriend() {
    var friendNames = ['Jahid', 'Rony', 'Fahim', 'Rayhan', 'Rasel'];
    var length = 0;
    var longest = "";

    for (var i = 0; i < friendNames.length; i++) {
        if (friendNames[i].length > length) {
            var length = friendNames[i].length;
            longest = friendNames[i];
        }
    }
    return longest;
}
var longestFriend = megaFriend();
