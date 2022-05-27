
/////////////////////////////////////// solution 1

// function makeUser() {
//     return {
//       name: "John",
//       ref() {
//         return this.name;
//       }
//     };
//   }
  
//   let user = makeUser();
  
//   alert( user.ref() ); // this worked

///////////////////////////////////////// solution 2

function makeUser(){

    this.lastname = 'moradi'  ///// for executed successfully : this line added
    return {
        name : 'john',
        ref : this.lastname  ///// in this vaghti khalie , be obj window eshare mikonad ke eshtebah ast
    };
}
let user = makeUser();
console.log(user.ref);





////// alert(user.ref.name);  //  dar halate aval in khoroji khali ast

////// for executed successfully :
// console.log(makeUser().ref); 
//-------------------

