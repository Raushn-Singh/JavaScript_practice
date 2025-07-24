//local Storage 
//browser feature
//local storage is a key value pair storage
//data is stored in the browser
//it store data even after the browser is closed
//it is used to store data that is needed by the web application

// localStorage.setItem('name', 'Mohit Decodes')
// localStorage.setItem('age', 25);
// const user = localStorage.getItem('name');
// console.log(user);
// localStorage.removeItem('name');
// localStorage.clear();


//sessionStorage
//session storage is a key value pair storage
//data is stored in the browser
// data will remove after the browser is closed

//it is used to store data that is needed by the web application for a short period of time
sessionStorage.setItem('name', 'Mohit Decodes')
const user = sessionStorage.getItem('name');
console.log(user);
sessionStorage.removeItem('name');
sessionStorage.clear();  //clear all data from session storage


//cookies
document.cookie = "name=mohit; expire:fri 31 Dec 2022 00:00:00 GMT; path=/"

document.cookie = "age=25; expire:fri 31 Dec 2022 00:00:00 GMT; path=/"




