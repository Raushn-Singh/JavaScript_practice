//Promise--Success(resolve) /Failure(reject)


// let myPromise = new Promise((resolve, reject) => {
//   // let success = true;
//   // if (success) {
//   //   resolve("Promise is resolved");
//   // } else {
//   //   reject("Promise is rejected");
//   // }
//   setTimeout(() => {
//     resolve("Promise is resolved");
//   }, 5000)
// })

// myPromise.then((message) => {
//   console.log(message);
// }).catch((error) => {
//   console.log(error);
// })


//chaining promises

// myPromise.then((message) => {
//   console.log(message);
// }).catch((error) => {
//   console.log(error);
// }).finally(() => {
//   console.log("Promise")//this will run regardless of the outcome
// })


//Async/Await
// async function fetchData() {
//   try {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);


//   } finally {
//     console.log("Fetch operation completed");
//   }
// }

// fetchData()


// fetch and axios are use to handle the api call

//Get fetch Api
// let url = 'https://jsonplaceholder.typicode.com/posts';
// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error))
//   .finally(() => console.log("Fetch operation completed"))

// //Post Fetch Api
// let postUrl = 'https://jsonplaceholder.typicode.com/posts';
// let postBody = {
//   title: 'foo',
//   body: 'bar',
//   userId: 1
// }
// fetch(postUrl, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(postBody)
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error))


//Error handling
let url = 'https://jsonplaceholder.typicode.com/posts';
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error))





