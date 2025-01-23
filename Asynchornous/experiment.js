const person = {
    name : 'Max', 
    age: 25,
    greet(){
        console.log('Hello i am' + this.name);
    }
};

const hobbies = ['Sports', 'Cooking'];
console.log(hobbies.map(hobby => 'Hobby ' + hobby));
//console.log(hobbies);