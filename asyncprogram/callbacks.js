const posts = [
  { title: "post one", body: "this is post one" },
  { title: "post two", body: "this is post two" },
];

function getPost(){
    setTimeout(() =>{
        let output= '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</lil>`;
        });
        document.body.innerHTML = output;
    }, 1000 )
}


function createPost(post, callback ){
    setTimeout(() => {
        posts.push(post);
        callback();
    },4000)
}


createPost({title: 'post three', body: 'this is post three'},getPost );