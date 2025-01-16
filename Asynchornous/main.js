import { makeCoffee, sendCoffee } from './coffe.js';

const order = 'Kopi Espresso';

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
    console.log('ini adalah entitas dari makeCoffeError' + makeCoffeeError);
    if (makeCoffeeError) {
    // Do something with error
    console.error(makeCoffeeError);
    return;
  }


  sendCoffee(makeCoffeeData, (gagalKirimKopi, sendCoffeeData) => {
    if (gagalKirimKopi) {
      // Do something with error
      console.error(gagalKirimKopi);
      return;
    }

    console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan.`);
    console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya.`);
  });
});




