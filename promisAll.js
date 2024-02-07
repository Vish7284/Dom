const  posts = [
    {title: 'Post One' , body:'This is post one'},
    {title:'Post two' , body:'This is post two'}
];
function getPost(){
    setTimeout(() =>{
        let output ='';
        posts.forEach((post ,index)=>{
            output +=`<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    },1000)
}

function createPost(post){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            posts.push(post);
            const err = false;
            if(!err){
                resolve();
            }
            else{
                reject('Error: Something went wrong')
            }
        },2000)
    })
   
}
function updateLastUserActivityTime(){
    return new Promise((resolve , reject) =>{
        setTimeout(() => {
        const lastActivityTime = new Date().getTime();
        resolve(lastActivityTime);
        },1000)
    })
}

function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const delpost = posts.pop();
            resolve(delpost)
        },1000)
    })
}

const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => 
    setTimeout(resolve,2000,'Goodbye')
);
Promise.all([promise1,promise2,promise3,updateLastUserActivityTime()])
.then(values => console.log(values))
.then(() =>{
    deletePost()
});