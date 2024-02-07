const posts =[];
const updateLastUserActivityTime = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date());
        },1000)
    })
};
 
const createPost = (post) =>{
 return new Promise((resolve, reject) => {
    posts.push(post);
    resolve(posts);
 })
}
const deletePost = () => {
    return new Promise((resolve, reject) => {
        posts.pop();
        resolve(posts);
    })
}

Promise.all([
    createPost("First Post"),
    createPost("Second post"),
    updateLastUserActivityTime()
])
.then(([updatedPosts , LastActivityTime]) => {
    console.log("Posts" , updatedPosts);
    console.log("Last Activity Time" , LastActivityTime);

    return deletePost();
})
.then((remainingPosts) => {
    console.log("Remaining Posts" , remainingPosts);
})
.catch((err) => {
    console.log("An error occured" , err);
});