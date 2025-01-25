export class User{
    constructor(name, id , address){
        this._name   = name;
        this._id     = id; 
        this._address = address;  
    }

    setName(name){
        return this._name = name;
    }

    getName(){
        return this._name; 
    }

    setId(id){
        return this._id = id;
    }

    getId(){
        return this._id;
    }

    setAddress(address){
        return this._address = address;
    }

    getAddress(){
        return this._address; 
    }
}