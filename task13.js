function handleFormSubmit(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const obj ={
        name,
        email,
        phone
    }
    localStorage.setItem(obj.email,JSON.stringify(obj));
    showUserOnScreen(obj)
    event.target.username.value = '';
    event.target.email.value = '';
    event.target.phone.value = '';

}
function showUserOnScreen(obj){
    const parentEl = document.getElementById('listOfitems')

   // parentEl.innerHTML = parentEl.innerHTML+ `<li>${obj.name}  - ${obj.email}  -${obj.phone}`;
   const childEl =document.createElement('li');
   childEl.textContent = obj.name + ' - ' + obj.email + ' - ' + obj.phone;
  // console.log(childEl)
   const delbtn = document.createElement('input');
   delbtn.type ='button';
   delbtn.value = 'Delete';
   console.log(delbtn)
   delbtn.onclick = () =>{
    localStorage.removeItem(obj.email)
    parentEl.removeChild(childEl)
   }
   const edtbtn = document.createElement('input');
   edtbtn.type ='button';
   edtbtn.value = 'Edit';
   childEl.appendChild(edtbtn);
   console.log(childEl)
   edtbtn.onclick = () =>{
    const storedData = JSON.parse(localStorage.getItem(obj.email));
    if (storedData) {
        document.getElementById('username').value = storedData.name;
        document.getElementById('email').value = storedData.email;
        document.getElementById('phone').value = storedData.phone;
        localStorage.removeItem(obj.email);
        parentEl.removeChild(childEl);
    }
   }
   childEl.appendChild(edtbtn);
   childEl.appendChild(delbtn)
   parentEl.appendChild(childEl)
}
 