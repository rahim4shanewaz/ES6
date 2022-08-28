const multiply = (x,y,z) => x*y*z;
const result = multiply(2,3,4);
//console.log(result);


const arr= ['ratul','royans','sakibs','arkans'];

const friends = x => {

     const evenFriends = [];
    for(const friend of x){
        if(friend.length % 2 === 0){
            evenFriends.push(friend);
        }
    }
    //console.log(evenFriends);
}
friends(arr);
 // squire of Array elements and sum for array elements and average of squire elemnts of  the array 
const arrNumber = [2,3,4,5,6];
const numberCalculate = num => {
    const squrElemnt = [];
    for(const numbers of num){
        const squirenumber = numbers * 2;
        squrElemnt.push(squirenumber);
        
    }
    const totalLength = arrNumber.length
    //console.log(totalLength);
    
    //console.log(squrElemnt);
    let sum = 0;
    for(const x of squrElemnt){
        sum = sum + x;
    }
    //console.log(sum);
    const averageOfSqire = sum / totalLength;
    //console.log(averageOfSqire);
    return squrElemnt;
}

const squrElemnts = numberCalculate(arrNumber);
console.log(squrElemnts);


const twoArray = (arr1, arr2) => {
    const arryOne =  arr1;
    const arryTwo = arr2;
    const newArry = [...arryOne, ...arryTwo];
    const maximum =  Math.max(...newArry)
    return maximum;
}
console.log(twoArray(arrNumber,squrElemnts ));

