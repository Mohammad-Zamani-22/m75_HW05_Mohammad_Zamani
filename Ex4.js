
// ex4

class myCircle             // radi is sho'aa
{
    constructor(radi){
    this.radi = radi;}

    
    area = function () 
    {
        return { 'masahat' : Math.PI * this.radi * this.radi }  // masahat
    };
  
    perimeter = function ()
    {
        return { 'mohit' : 2*Math.PI*this.radi}  // mohit
    };

}
var c = new myCircle(5);  // shoa migire

console.log('masahat :', c.area());
console.log('mohit :', c.perimeter());





