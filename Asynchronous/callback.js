export function makeBurito(callback){
   
    console.log(`mohon menuggu Burrito sedang dimasak `);

    setTimeout(() => {
        // Do some tasks to make coffee...
        console.log('Pramusaji selesai membuat burrito.');
    
       
      }, 6000);
    
    callback();

}

export function delay(time){
    return new Promise (resolve => setTimeout(resolve, time));
}

export async function cookingProcess(callback){
    const estimationTime = 10000;
    const inSecond = Math.ceil(estimationTime/1000);

    console.log(`Mohon tunggu sebentar Burritonya sedang dimasak 4(${inSecond} detik)`);

    //diberi saus, dipanggang , diberi topping bawang , callback

    console.log('Burritto diberi saus');

    await delay (2000);
    console.log('Burrito sedang di panggang');

    await delay (9000);
    console.log('Burrito diberi topping bawang');

    await delay(2000);
    callback();
} 