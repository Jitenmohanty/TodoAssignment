
//Basic functions Uses


// Here is the way to declare a function if function set a argument or not it does not matter

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());

// if you try to pass More than one argument take only one and taken the first element...that's why we use Rest operateor It return a array...

function one (...num1){
    return num1;
}
// [10, 20, 45, 60]
function one (val1,val2,...num1){
    return num1;
}
//[ 45, 60]
console.log(one(10,20,45,60));

const user = {
    username: "hitesh",
    prices: 199
}

// const funcObject = (anyObject)=>{
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
// }

// funcObject(user)

const funcObject = (anyObject)=>{
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// You can also pass Like this... Object destructering inside a parameter..
funcObject({
    username:'Jitu',
    price:2000000000
})

//You can call the array Like this...
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));