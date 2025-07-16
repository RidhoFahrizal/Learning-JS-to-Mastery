export function makeCoffee() {
  const estimationTime = 5000;

  const inSecond = Math.ceil(estimationTime / 1000);
  console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);

  setTimeout(() => {
    // Do some tasks to make coffee...
    console.log('Pramusaji selesai membuat kopi.');
  }, estimationTime);
}

export function membayar (){
  const time = 7000;
  console.log('Saya berjalan ke kasir');
  setTimeout(() => {
    console.log('Berhasil membayar');
  }, time);
  
}

export function pulang(){
  const time = 10000;
  console.log();
  setTimeout(() => {
    console.log('Saya sampai di depan rumah');
    console.log('Saya sudah pulang');
  }, time);
}



