
/*
Promise dalam bahasa indonesia artinya adalah janji. Janji di node js 
ini berarti akan di janjikan untuk di execute tapi ga tahu kapan . di
sini promise menjadi unik kita tidak pernah tahu kapan kode akan di e
ksekusi. 

ada 3 state dalam promise : 
1. Pending    : proses asynchronus masih berjalan
2. Fullfuiled : proses berhasil 
3. Rejected   : proses gagal karena error
*/

// BASIC SYNTAX

const myPromise = new Promise ((resolve , reject) =>{
    const success = true 
    if (success){
        resolve('Operation was successful');

    }else{
        reject('Something went worng');
    }
});