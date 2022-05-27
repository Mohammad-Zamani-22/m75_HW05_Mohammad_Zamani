
a ={

    "id" : {
        "name" : "ali",
        "grades" :{
            "math" : 18,
            "physics" : 19,
            "english" : 15
        }
    }
}


// let newfile = {
//     a.[key]:a.[value],
// }

let b =  JSON.parse(JSON.stringify(a));
console.log(b);