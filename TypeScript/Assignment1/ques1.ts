let strarray:string[];
strarray=['akshat','divya','oman','barde']

let display = (strarray:string[]) =>
{
    strarray.forEach((value) => {
        console.log(value, value.length);
      }); 
};

display(strarray);