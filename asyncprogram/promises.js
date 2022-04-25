// // synchronous
// // code will start at top of the file
// // execute all the way down to bottom of file line by line..


// // asynchronous 
// // code will also start from the top of the file and execute the way down.
// // during the execution it will run into curtain 
// //asynchronous code and function then it will split off and execut the asynchronous code sparately from rest of the code and it  
// //useually because it need to wait and take time. 

// // synchronous code

let a =1;
let b=2;

console.log('synchronous');
console.log(a);
console.log(b);



// // asynchronous code

let c =1;

setTimeout(() => {       // // async code
    console.log('Async ' + c);
}, 2000);

c = 10;

// fetch('/').then(function(){      // // async code
//     console.log('fetch');
// })

console.log('synchronous');
console.log(c);









// // async and promises..

const posts = [
  { title: "post one", body: "this is post one" },
  { title: "post two", body: "this is post two" },
];



function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</lil>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something is wrong");
      }
    }, 2000);
  });
}

createPost({ title: "Post Three", body: "This is post three" })
  .then(getPost)
  .catch((err) => console.log(err));


// // async / await

// async function init(){
//   await  createPost({ title: "Post Three", body: "This is post three" });

//   getPost();
// }

// init();

// // async / await / with fetch
// async function fetchUsers(){
//  const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json();
//     console.log(data);


// }
// fetchUsers();

// // promise all

// const promise1 = Promise.resolve("hello");
// const promise2 = 20;
// const promise3 = new Promise((resolve, reject) => 
//   setTimeout(resolve, 2000, "good bye")
// );

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1,promise2,promise3,promise4]).then(value => console.log(value));
