class Smartphone{
    constructor(color,brand,model){
        this.color= color;
        this.brand = brand;
        this.model = model;

    }
    charging(){
        console.log(`charging ${this.model}`);
    }


}

// melakukan inheritance (extends)
class IOS extends Smartphone{
    // menambahkan behavior pada IOS
    airDrop(){
        console.log(`${this.model} have a feature for airdrop`);
    }
    
}

class Android extends Smartphone{
    splitScreen(){
        console.log(`${this.model} have a split screen feature`);
    }
}

const Samsung = new Android('red','Samsung', 'A7');
const IphoneXS = new IOS('Blue', 'iphone', 'XS');

Samsung.splitScreen();
IphoneXS.airDrop();

console.log(Samsung instanceof Smartphone);
console.log(IphoneXS instanceof Smartphone);