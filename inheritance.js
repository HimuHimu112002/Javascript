class parent{
    constructor(){
        this.fither = "jahedul islam";
    }
}

class child extends parent{
    
    constructor(name, age){
        super();
        this.name = name;
        this.age = age;
    }
    // function diye call korar system
    add(){  
        return this.name + " " + this.fither;
    }
}

const student1 = new child("himu",24);
console.log(student1.add());