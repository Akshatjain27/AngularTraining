class Demo {
    private value:string;

    public getValue = ()=>{
        return this.value;
    }

    public setValue = (value:string)=>{
        this.value=value;
    }

    public  operate=()=>{
        var countV:number=0;
        var countC:number=0;
        var arr:string[]=this.value.split("");
        arr.forEach(element=>{
            if(this.isVowel(element)){
                countV++;
            }
            else{
                countC++;
            }
        });
        if(this.isVowel(arr[0])){
            return countC;
        }else{
            return countV;
        }
    }
    
    private isVowel = (ch:string) => {
        switch(ch) {
            case "a":
            case "A":
            case "e":
            case "E":
            case "i":
            case "I":
            case "o":
            case "O":
            case "u":
            case "U":
                return true;
            default:
                return false;
        }
    }
}

var obj:Demo = new Demo();
obj.setValue("Akshat");
console.log(obj.getValue());
console.log(obj.operate());


