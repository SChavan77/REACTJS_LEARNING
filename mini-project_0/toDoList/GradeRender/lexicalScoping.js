var sum = function (a) {
    console.log("Live Viewers: " + a);
    var c = 5;
    return function (b) {
        return a + b + c;
    }
}
var store = sum(2); //Sum executes & returns function(b) and stored in store variable
console.log(store(3));