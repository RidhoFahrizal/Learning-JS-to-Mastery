
// Hari ini kita mempelajari functional programming di Javascript 




const names = ['Harry', 'Ron', 'Jeff' , 'Thomas'];

const newNmaesWhithExcMark = [];

for(let i = 0 ; i< names.length ; i++){
    newNmaesWhithExcMark.push(`${names[i]}!`);
}


console.log(newNmaesWhithExcMark);


// contoh impure function 

let value = 0; 
function addwith(addingValue){
    value += addingValue;
    console.log(`Current value is ${value}`);
    return value;
}

const result1 = addwith(1);
const result2 = addwith(2);
const result3 = addwith(2);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(value);


// contoh pure function
// Jadi dia hanya mengolah sebuah parameter  
function addValue(value , addingValue){
    return value + addingValue;
}

const addValueResult1 = addValue(9, 8);
const addValueResult2 = addValue(3, 10);

console.log("Hasil dari addvalue pure function adalah : " + addValueResult1);
console.log("Hasil dari addvalue pure function adalah : " + addValueResult2);











