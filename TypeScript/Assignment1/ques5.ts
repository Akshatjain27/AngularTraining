interface Shape {
    shapename:string;
    printname:()=>string;
}

class Cone implements Shape{
    shapename="Cone";
    printname=()=>{
        return this.shapename;
    };
    r:number;
    l:number;
    constructor(r:number,l:number)
    {
        this.r=r;
        this.l=l;
    }
    area=():number=>{
        return 3.14*this.r*(this.r+this.l);
    }

}
class Sphere implements Shape{
    shapename="Sphere";
    printname=()=>{
        return this.shapename;
    };
    r:number;
    constructor(r:number)
    {
        this.r=r;
    }
    area=():number=>{
        return 4*3.14*this.r*this.r;
    }

}

class Rectangle implements Shape{
    shapename="Rectangle";
    printname=()=>{
        return this.shapename;
    };
    b:number;
    l:number;
    constructor(b:number,l:number)
    {
        this.b=b;
        this.l=l;
    }
    area=():number=>{
        return this.l*this.b;
    }

}

let rec:Rectangle=new Rectangle(12,23);
let cone:Cone=new Cone(5,12);
let sphere:Sphere=new Sphere(23);

console.log(rec.printname());
console.log(rec.area());
console.log(cone.printname());
console.log(cone.area());
console.log(sphere.printname());
console.log(sphere.area());
