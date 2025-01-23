import { Student } from "./student.js";

export class Model{
    constructor(){
        
    }
    createStudentData(name, id , address, nrp ){
       return new Student(name, id, address, nrp);
    }

    

}