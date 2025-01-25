export function makeBurito(callback){
   
    console.log(`mohon menuggu Burrito sedang dimasak `);

    setTimeout(() => {
        // Do some tasks to make coffee...
        console.log('Pramusaji selesai membuat burrito.');
    
        callback();
      }, 6000);
}

export function cookingProcess(callback){
    const estimationTime = 10000;
    const inSecond = Math.ceil(estimationTime/1000);

    console.log(`Mohon tunggu sebentar Burritonya sedang dimasak 4(${inSecond} detik)`);

    setTimeout(() =>{
        console.log('Burrito diberi saus');
    },2000);
    setTimeout(() =>{
        console.log('Burrito sedang di panggang');
    },9000);

    setTimeout(() =>{
        console.log('Buritto diberi topping bawang'); 
    },2000);


    callback();
} 