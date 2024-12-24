
class segitiga{
    
    constructor(alas, tinggi ){
        this.alas = alas;
        this.tinggi = tinggi;
    }
    
    CalculateAreaOfTriangle = () => {
        return this.alas * this.tinggi /2;
    }

        
}

// Inheritance 

class SegitigaSamaSisi extends segitiga{
    constructor(alas, tinggi, sisi ){
        super(alas, tinggi);
        this.sisi = sisi;
    }

    CalculatePerimeterOfTriangle = () =>{
        return 3*this.sisi;
    }
}


const lapanganBaseball = new SegitigaSamaSisi(3,3,3);
console.log("keliling lapangan baseball adalah : " + lapanganBaseball.CalculatePerimeterOfTriangle());
console.log("Luas dari lapangan baseball adalah : " + lapanganBaseball.CalculateAreaOfTriangle());
halamanRidho = new segitiga(3,4);
console.log(halamanRidho.CalculateAreaOfTriangle());
