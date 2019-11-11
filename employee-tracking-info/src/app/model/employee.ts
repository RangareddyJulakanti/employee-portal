export class  Employee{
    public id:number;
    public firstName:string;
    public lastName:string;
    public username:string;
    public password:string;
    public salary:number;

  constructor(
     id:number,
     firstName:string,
     lastName:string,
     username:string,
     password:string,
     salary:number){
      this.firstName=firstName;
      this.id=id;
      this.lastName=lastName;
      this.password=password;
      this.username=username;
      this.salary=salary;
  }

}
