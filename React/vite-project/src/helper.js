function genArray(n){
    let arr = new Array(n);
    for(let i=0;i<n;i++){
        arr[i] = Math.floor(Math.random()*10);
    }
    return arr;
}
function sumArr(arr){
    return arr.reduce((acc,num)=>acc+num,0);
}

export {genArray,sumArr};