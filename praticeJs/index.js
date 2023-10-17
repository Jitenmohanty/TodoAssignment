




// Lets Start the Promises.....

// 1...
const firstPoromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async The Code 1");
    // If you want to call the chain function You want to call resolve function inside main Promise...Then it create a chain;
    resolve();
  }, 1000);
}).then(() => {
  console.log("Code working");
});

// 2.....

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async code 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Resolve 2 Promise");
});

const Promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async code 2");
    // You can Send the any type of data in the form of anything to recive in the then function you can says u use in resolve code...
    resolve({ name: "Jitu", class: "24" });
  }, 1000);
  // if recive the data you want use a params...to access.
}).then((user) => {
  console.log(user);
});

// Promise3.then((user)=>{
// console.log(user)
// })

// 4....

const Promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      console.log("Async code 4");
      resolve({ name: "jitu", password: "2589" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

// Error catch Like this...
// Then learn how to multiple Then chain and how to recive return statement...Like recive data...!  You can't store inside a virable bcz it was a promise..

Promise4.then((user) => {
  console.log(user);
  return user.name;
})
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(
      "Finaly Block Is always executed... It Notice that Your response was return Whatever may be reject or resolve..."
    );
  });

//5....
//This example demonstrting on what is the dif between async and Promise... 

const Promise5 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true;
        if (!error) {
          console.log("Async code 4");
          resolve({ name: "jitu", password: "2589" });
        } else {
          reject("Error: Something went wrong");
        }
      }, 1000);
})

// Here is the Main difforence Error mangement was not so well...To Overcome This problem we use tryCatch...

// const consumePromise = async ()=>{
//     const response = await Promise5
//         console.log(response)
// }

// consumePromise();
const consumePromise = async ()=>{
    try {
        const response = await Promise5
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromise();

// async function getAlluser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// } 

// getAlluser();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((res)=>{
    console.log(res)
}).
catch((err)=>{
    console.log(err)
})


// The fetch method have always more Priority inside a callstack...That's Why... fetch request come first at the time of execution....

