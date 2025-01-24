console.log("Mulai");

Promise.resolve().then(() => {
  setTimeout(() => {
    console.log(`Tugas B selesai (5 detik)`);
  },5000);
});

setTimeout(() => {
  console.log("Tugas B selesai (2 detik)");
}, 8000);



console.log("Proses lainnya berjalan...");
