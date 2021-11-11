function filtering(a, b) {
    let array = [];
    while (a<b) {
        array.push(a);
        a++;
    }
    return array;
}

let arr = [];
function recursive_filtering(arr, a, b) {
    arr.push(a);
    if (a===b) 
      return arr; 
    else     
      return recursive_filtering(arr,++a,b);
}

console.log(recursive_filtering(arr,5,7));
console.log(filtering(5,10));