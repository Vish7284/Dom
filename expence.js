const heading = document.querySelector('h1');
heading.style.textAlign ="center"; 
heading.style.color="orange"
const form = document.getElementById("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    const amount = document.querySelector("#amount").value;
    const descri = document.querySelector("#descri").value;
    const cat =  document.querySelector("#sel").value;
    
    const details ={
        amount,
        descri,
        cat
    }
    localStorage.setItem(details.amount, JSON.stringify(details));
    function showUser(details){
        const ul = document.createElement("ul");
        ul.appendChild(document.createTextNode("List"))
        ul.id ="list";
        const child = document.createElement("li");
        child.textContent = details.amount + ' - ' + details.descri + ' - ' + details.cat ;
       // console.log(child);
       const delbtn = document.createElement("input");
        delbtn.type = "button";
        delbtn.value = 'Delete'; 

        delbtn.onclick = () => {
            localStorage.removeItem(details.amount);
            ul.removeChild(child);
        }
          const edtbtn = document.createElement('input');
          edtbtn.type ='button';
          edtbtn.value = 'Edit';
          edtbtn.backgoroundColor ='orange';
          edtbtn.onclick = () =>{
         const storedData = JSON.parse(localStorage.getItem(details.amount));
         if (storedData) {
            document.getElementById('amount').value = storedData.amount;
            document.getElementById('descri').value = storedData.descri;
            document.getElementById('sel').value = storedData.cat;
            localStorage.removeItem(details.amount);
            parentEl.removeChild(child);
    }
   }
        child.appendChild(edtbtn);
        child.appendChild(delbtn);
        ul.appendChild(child);

        document.body.appendChild(ul); 
    }

    showUser(details);
     document.querySelector("#amount").value = "";
     document.querySelector("#descri").value = "";
     document.querySelector("#sel").value = "";
})
