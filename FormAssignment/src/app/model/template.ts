export class Employee{
    
    mail?:string;
    subscription?:string;
    password?:string;
  
    constructor(email:string,subscription:string,password:string)
    {
        this.mail = email;
        this.subscription = subscription;
        this.password = password;
    }
}