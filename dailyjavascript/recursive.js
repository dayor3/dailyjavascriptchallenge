//program for recurssion
let total = function(n){
    if (n<=0){
        return 0;
    }else{
        return n + total(n-1);
    }
}
console.log(total(5));