
// ini adalah contoh pembuatan prototipe dengan fucntion constructior m
function Person(name, age) {
  this.name = name;
  this.age = age;
}
 
Person.prototype.eat = function() {
  console.log(`${this.name} is eating`);
}

const Ridho = new Person('Ridho', 19);


Ridho.eat();

// setelah ini kita akan membuat prototipe deengna class 
class Mahasiswa{

    constructor(name, age){
        this.name = name;
        this.age = age; 
    }
    

    paysTuition(){
        console.log(`this ${this.name} paying the tuition`);
    }
}

const jack = new Mahasiswa('Jack', '20');

console.log(jack.name);
console.log(jack.age);
jack.paysTuition();
console.log("tipe dari class Mahasiswa adalah: " + typeof(Mahasiswa));// function 