function sum(x, y){
    return x+y;
}


// function invokation..
let ans = sum(33,14);
console.log("The Answer of sum is :" + ans);


// Parameters passes through Ref...
function printingArray(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    arr[1] = "PineApple";
}

let fruits = ["apple","Banana","Grapes","Kiwi"];
// printing array using for loop
console.log("Printing the Array using For Loop...")
printingArray(fruits);
console.log("Printing the Modified Array using For Loop...")
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}