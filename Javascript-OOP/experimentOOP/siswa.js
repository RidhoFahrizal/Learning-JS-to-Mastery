export { User } from "./user.js";


class Siswa extends User{
    constructor(name, id , address, nrp ){
       super(name, id, address); 
       this._nrp = nrp; 
    }

    setNrp(nrp){
        this._nrp = nrp;
    }

    getNrp(){
        return this._nrp;
    }
    
}