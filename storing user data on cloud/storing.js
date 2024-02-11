function handleFormSubmit(event){
    event.preventDefault();
    const UserDetails ={
        username : event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value
    };
    axios
    .post("https://crudcrud.com/api/d69845bb2f4b48cc9b42aab9a61ab496/Bookapointment",UserDetails)
    .then((res) => {
        displayUserOnScreen(res.data)
    })
    .catch((err) => {
        console.log(err);
    })

    document.getElementById("username").value="";
    document.getElementById("email").value ="";
    document.getElementById("phone").value ="";

}

window.addEventListener("DOMContentLoaded",() => {
    axios
    .get("https://crudcrud.com/api/d69845bb2f4b48cc9b42aab9a61ab496/Bookapointment")
    .then((res) => {
        console.log(res);
        for(let i=0; i< res.data.length;i++){
            displayUserOnScreen(res.data[i]);
        }
    })
    .catch((err) => {
        console.log(err);
    })
})
function displayUserOnScreen(UserDetails){
    const userItem = document.createElement("li");
    userItem.appendChild(document.createTextNode(`${UserDetails.username} - ${UserDetails.email} - ${UserDetails.phone}`))
    
const delbtn = document.createElement("button");
delbtn.appendChild(document.createTextNode("Delete"));
userItem.appendChild(delbtn);

const edtbtn =  document.createElement("button");
edtbtn.appendChild(document.createTextNode("Edit"));
userItem.appendChild(edtbtn);

const userList = document.querySelector("ul")
userList.appendChild(userItem);


delbtn.addEventListener("click",function(event){
    userList.removeChild(event.target.parentElement);
    const userId = UserDetails._id; 

    axios
        .delete(`https://crudcrud.com/api/d69845bb2f4b48cc9b42aab9a61ab496/Bookapointment/${userId}`)
        .then((res) => {
            userList.removeChild(event.target.parentElement);
        })
        .catch((err) => {
            console.log(err);
        });
})

edtbtn.addEventListener("click", function(event){
    userList.removeChild(event.target.parentElement);
    const userId = UserDetails._id; 

    axios
        .put(`https://crudcrud.com/api/d69845bb2f4b48cc9b42aab9a61ab496/Bookapointment/${userId}`)
        .then((res) => {
            userList.removeChild(event.target.parentElement);
        })
        .catch((err) => {
            console.log(err);
        });
    document.getElementById("username").value = UserDetails.username;
    document.getElementById("email").value = UserDetails.email;
    document.getElementById("phone").value = UserDetails.phone;
})
}
