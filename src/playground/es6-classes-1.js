class person{
    constructor(name="dah defult dah",age=0){

        this.name=name;
        this.age=age;

    }

    getGretting(){

        return 'hi! iam' + this.name;
        //return 'hi! iam ${ this.name }';
    }

    getDescription(){

        return this.name + this.age;
    }
}

class student extends person{

constructor(name,age,major){
    super(name,age);
    this.major=major;
}

HasMajor(){
    return !!this.major;
}

getDescription(){

  let description = super.getDescription();

  if(this.HasMajor()){

    description += 'their major is' + this.major;
   
  }
  return description;
}

}

class Traveler extends person{
constructor(name,age,homelocation){
    super(name,age);
    this.homelocation=homelocation;
}
getGretting(){
   
  let greeting = super.getGretting();

  if(this.homelocation){

    greeting += 'i m visiting from  ' + this.homelocation;
   
  }
  return greeting;
    //return 'hi! iam' + this.name;
    //return 'hi! iam ${ this.name }';
}

}

const me = new Traveler('fatma mohamed',22,'cairo');
console.log(me.getGretting());

const other = new Traveler();
console.log(other.getGretting());