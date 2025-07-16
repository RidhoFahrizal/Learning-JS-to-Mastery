import { cookingProcess, makeBurito } from './callback.js';

console.log('Saya memesan burrito di kafe.');

makeBurito(() =>{
    cookingProcess(() => {
        console.log('Preman mexico memesan burrito.');
        console.log('Preman mendapatkan burritonya.');
    }); 
});