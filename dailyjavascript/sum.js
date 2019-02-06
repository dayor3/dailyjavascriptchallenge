//function to find the sum of the elements of an array
let numbers = [1,2,3];
function add(arrValue){
 let total = arrValue.reduce((sum,value) => {
        return sum + value;
    },0);

console.log(total);
}
add(numbers)