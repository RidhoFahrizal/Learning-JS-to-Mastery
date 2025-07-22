/*
This study case let user to choose meal that they want
your responsibilities is make sure user can see the menu 
and user get the meal that they want 

1. Make Menu 
2. Make 
*/
import readline from 'readline';

const MainDishes = new Map([
  [1, "Rendang"],
  [2, "Soto Lamongan"],
  [3, "Gulai Kambing"]
]);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function tanyaPertanyaan(pertanyaan) {
  return new Promise((resolve) => {
    rl.question(pertanyaan, (jawaban) => {
      resolve(jawaban);
    });
  });
}

async function main() {
  console.log("Selamat datang di Restauran Kami");
  console.log("================================");
  console.log("Main Dishes");
  for (const [key, value] of MainDishes) {
    console.log(`${key}. ${value}`);
  }

  const jawaban = await tanyaPertanyaan("Masukkan pilihan: ");
  const pilihan = Number(jawaban);

  let hasil = null;

  if (Number.isInteger(pilihan) && MainDishes.has(pilihan)) {
    hasil = MainDishes.get(pilihan);
    console.log(`Anda memilih: ${hasil}`);
  } else {
    console.log("Pilihan tidak valid.");
  }

  rl.close();
  return hasil; // ⬅️ hasil dikembalikan
}

// ✅ Await hasil dari main
const run = async () => {
  const pilihan = await main();
  console.log("Pilihan untuk tugas selanjutnya:", pilihan);
};

run();


//let choose = prompt();
// rl.question('Silahkan Pilih pesnanan anda: ', (pesanan) => {
//   const pesanan = 
//     if(Number.isInteger(pesanan)){
//     console.log("nice")
//   }else
//     console.log("Tolong masukkan angka")
//   rl.close();
// });