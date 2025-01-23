import { User } from "./user.js";



/*
   NOTE:  Kita akan bikin sebuah function yang akan mereturn data Siswa, Menapilkan 
    ,Mengedit, dan Menghapus (Create);
    
*/

export class Student extends User{
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