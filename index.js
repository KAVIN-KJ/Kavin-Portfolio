
function main(){

    var num = 10;
    function fibonacci(num){
        if(num<=1) return num;
        return fibonacci(num-1)+fibonacci(num-2);
    }
    console.log(fibonacci(num))
    let now = new Date
    console.log(now);
    let pow=Math.pow(12,2)
    console.log(pow);
    
}

function age(num){
    console.log(num>=18);
}
// age(17.9999);
function grade(mark){
    switch(mark){
        case (mark>=90): console.log("Grade O");
        case (mark>=80): console.log("Grade A+");
        case (mark>=70): console.log("Grade A");
        default: console.log("Arrear");
    }
}
// grade(20);
// let i=0
// do{
//     console.log(i);
//     i++
// }while(i<=5)
// i=0
// while(i<=5){
//     console.log(i);
//     i++
// }
// let arr = [1,2,3,4,5,6,7,8,9,10,"kavin",""]
// for(let i in arr){
//     console.log(i);
// }


// age = 50
// console.log((age>50 && age<18) ? "You are unselected" : "You are Selected");




// Arrow Functions

function greet(name='User'){
    return `Hello ${name}`;
}

// console.log(greet("Kavin"));
// console.log(greet());

function args(...nums){
    let sum=0;
    for(let i in nums){
        sum+=nums[i];
    }
    console.log(sum);
}
args(1,2,3,45,6,6,7,7)
