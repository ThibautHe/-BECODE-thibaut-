var a = "3";
var b = "8";

/***********Do not change the code above 👆*******/
//Write your code here :
var c;

c = a;
a = b;
b = c;

/***********Do not change the code below 👇*******/





function createObject(key1,value1,key2,value2)
{
    let objet = {
        key1:(value1) =>{return value1;}
    }

    return objet.key1("test");
}

function type(...values){
    var types = [];

    values.forEach(element => {
        
    });
    types.push(typeof(element));
    console.log(types);
}

// type(5,"hello",true,undefined,null)


// for (let index = 0; index < 20; index++) {
//     console.log(index);
// }

let i=0;
for ( i%2==0; i <= 20; i+=2) {
        console.log(i);
}