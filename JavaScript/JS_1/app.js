// let arr=[1,2,3,4,5];

// let sqrArr = arr.map((el)=>(el*el));
// console.log(sqrArr);

// let sum = arr.reduce((acc,el)=>(acc+el));
// console.log(sum);

// let avg = sum / arr.length;
// console.log(avg);

// let sqrSum = arr.reduce((acc,el)=>(acc+(el*el)));
// console.log(sqrSum);

// let newArr = arr.map((el)=>(el+5));

// let words = ["apple","banana","pineapple","guava","litchi"];
// let upperWords = words.map((word)=>(word.toUpperCase()));


function doubleAndReturnArgs(array, ...args){
    let newArr = args.map((el)=>(el*2));
    return [...array,...newArr];
}

let answerArr = doubleAndReturnArgs([1,2,3,4],6,7,8,9,10);

let mergeObjects = function(obj1, obj2){
    return {...obj1,...obj2};
}

const obj1={
    username:"@sagnick",
    password:"abcd"
};
const obj2 ={
    id:123,
    followers:345
};

console.log(mergeObjects(obj1,obj2));
