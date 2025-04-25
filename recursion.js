const goToLunch = (person) => {
    if(person === 5) return true;
    console.log(person)
    return goToLunch(person + 1);
};
console.log("Outcome:- ",goToLunch(1))

const multiply = (num) => {
    let result = 1;
    for(let i = 1; i < num.length; i++){
        result *= num[i];
    }
    return result;
}//convert this into recursive
const recursiveMultiply = (num) => {
    console.log(num);
    if(num.length <= 0) return 1;
    return num[num.length-1] * recursiveMultiply(num.slice(0, num.length - 1));
}
console.log(multiply([1,2,3,4,5]));
console.log(recursiveMultiply([1,2,3,4,5]));


// Factorial of n
const factorial = (n) => {
    if(n === 1) return 1;
    return n * factorial(n-1);
}
console.log(factorial(4));