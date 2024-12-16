export class carRent{
 carData = [
    {
      "id": 1,
      "merek": "Toyota",
      "model": "Avanza",
      "tahun": 2021,
      "status": "tersedia",
      "harga_sewa_per_hari": 300000
    },
    {
      "id": 2,
      "merek": "Honda",
      "model": "Civic",
      "tahun": 2020,
      "status": "tersedia",
      "harga_sewa_per_hari": 500000
    },
    {
      "id": 3,
      "merek": "Suzuki",
      "model": "Ertiga",
      "tahun": 2019,
      "status": "disewa",
      "harga_sewa_per_hari": 250000
    },
    {
      "id": 4,
      "merek": "Daihatsu",
      "model": "Xenia",
      "tahun": 2022,
      "status": "tersedia",
      "harga_sewa_per_hari": 300000
    },
    {
      "id": 5,
      "merek": "Mitsubishi",
      "model": "Pajero",
      "tahun": 2021,
      "status": "tersedia",
      "harga_sewa_per_hari": 750000
    },
    {
      "id": 6,
      "merek": "Nissan",
      "model": "March",
      "tahun": 2020,
      "status": "disewa",
      "harga_sewa_per_hari": 200000
    },
    {
      "id": 7,
      "merek": "Hyundai",
      "model": "Creta",
      "tahun": 2023,
      "status": "tersedia",
      "harga_sewa_per_hari": 600000
    },
    {
      "id": 8,
      "merek": "Toyota",
      "model": "Fortuner",
      "tahun": 2021,
      "status": "tersedia",
      "harga_sewa_per_hari": 700000
    },
    {
      "id": 9,
      "merek": "Honda",
      "model": "Brio",
      "tahun": 2019,
      "status": "disewa",
      "harga_sewa_per_hari": 250000
    },
    {
      "id": 10,
      "merek": "Suzuki",
      "model": "Baleno",
      "tahun": 2020,
      "status": "tersedia",
      "harga_sewa_per_hari": 300000
    }
  ]

    showCar = () => {
        console.log(carData);
    }
}