function add(num1, num2){
    const total = num1 + num2;
    return total;
}
console.log(add(12,10));

function addWithDefault(num1=0, num2=10){
    const total = num1 + num2;
    return total;
}
console.log(addWithDefault(10));
