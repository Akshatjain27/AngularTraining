class Item {
    itemid:number;
    itemname:string;
    itemprice:number;
    category:string;
    constructor(itemid:number,itemname:string,itemprice:number,category:string) {
        this.itemid=itemid;
        this.itemname=itemname;
        this.itemprice=itemprice;
        this.category=category;
    }
    display= ()=>{
        console.log(this);
    }
}
 
let item1:Item=new Item(1,"car",500000,"vehicle");
item1.display();
