function add(num1,num2){
    const total = num1 + num2;
    return total;
}
const result = add(25,15);
console.log(result);


//arrow Function

const add1 = (num1,num2) => num1 + num2;
const result1 = add1(25,15);
console.log(result1);


//single parameter

const add2 = num => num * 2;
const result2 = add2(25);
console.log(result2);

// no parameter

const add3 = () => 3.1416;
const result3 = add3(2);
console.log(result3);

// multiLine Arrow Function

const add4 = (x,y,z) => {
    const sum1 = x+y;
    const sum2 = y+z;
    const sum3 = sum1 + sum2;
    return sum3;
}

const result4 = add4(2,4,6);
console.log(result4);


const arr = [56,3,56,3,5,77,332,78];
const max = Math.max(...arr);
console.log(max);

const arr2 = [...arr, 77];
console.log(arr2);
