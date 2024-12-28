// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()


// // async function getAllUsers(){
// //     try {
// //         const response = await fetch('https://jsonplaceholder.typicode.com/users')

// //         const data = await response.json()
// //         console.log(data);
// //     } catch (error) {
// //         console.log("E: ", error);
// //     }
// // }

// //getAllUsers()


// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))

// // promise.all
// // yes this is also available, kuch reading aap b kro.

// ********************************  MY OWN ONE  *************************************


// const a = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("aastha");
//     resolve();
//   }, 1000);
// });

// a.then(function(){
//     console.log("promise executed")
// })


// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("second form");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("second then executed")
// })


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("third form");
//         resolve({printing : "aastha"} )
//     },1000)
// }).then(function(a){
//     console.log(a.printing);    
// })


// new Promise(function(resolve , reject){
//     let a =true;
//     if(!a){
//         resolve("this is resolve one")
//     }
//     else{
//         reject("this is reject one")
//     }
// }).then(function(a){
//     console.log(a)
// }).catch(function(a){
//     console.log(a)
// }).finally(() => console.log("either one of them is executed"))


// new Promise(function(resolve , reject){
//         let a =true;
//         if(!a){
//             resolve("this is resolve one")
//         }
//         else{
//             reject("this is reject one")
//         }
//     }).then(function(b){
//         console.log("from first then : " , b);
//         return b; 
//     }).then(function(x){
//         console.log("from second then : ",  x);
//     }).catch(function(y){
//         console.log("form catch : " , y);
//     }).finally(() => console.log("either one of them is get printed. "))


// const a = new Promise(function(resolve , reject){
//         let a =true;
//         if(a){
//             resolve("this is resolve one")
//         }
//         else{
//             reject("this is reject one")
//         }
//     });
// async function x() {
//     try{
//         const b = await a;
//         console.log(b)
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// x();


// async function getAllUsers(){
//     try {
//         const response = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()

//         // const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers();


// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))