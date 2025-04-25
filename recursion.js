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

// create an array with ramge of numbers
const range = (start, end) => {
    if(start > end){
        return []
    }else{
        let number = range(start, end-1);
        number.push(end);
        return number
    }
}
console.log(range(0,5));

// Fibonacci Number
const fibonacci = (n) => {
    if(n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(8));

// reverse a string
const reverse = (str) => {
    if(str.length <= 1) return str;
    return reverse(str.substr(1)) + str[0];
}
console.log(reverse("hello"));

// Subsets backtracking algorithm
let result = [];
let temp = [];
const subsets = (arr) => {
    let result = [];
    let temp =[];
    function recursiveSubset(arr,i){
        if(i === arr.length){
            return result.push([...temp]);
        }
        temp.push(arr[i]);
        recursiveSubset(arr,i+1);
        temp.pop();
        recursiveSubset(arr,i+1);
    }
    recursiveSubset(arr,0);
    return result;
}
console.log(subsets([1,2,3]));