function handleFormSubmit(event){
    event.preventDefault();
    const choosen ={
        sellingPrice: event.target.sellingPrice.value,
        product: event.target.product.value,
        cat: event.target.cat.value
    };
    axios
    .post("https://crudcrud.com/api/c602cb0307134efc896f139c3c2e47e5/AddingToCart",choosen)
    .then((res) => {
        showProductOnScreen(res.data)

        document.getElementById("sellingPrice").value ="";
        document.getElementById("product").value ="";
        document.getElementById("cat").value="";
    })
    .catch((err) => {
        console.log(err);
    })

}

window.addEventListener("DOMContentLoaded",() =>{
    axios
    .get("https://crudcrud.com/api/c602cb0307134efc896f139c3c2e47e5/AddingToCart")
    .then((res)=>{
        console.log(res);
        for(let i=0;i<res.data.length;i++){
            showProductOnScreen(res.data[i]);
        }
    })
    .catch((err) => {
        console.log(err);
    })
})

function showProductOnScreen(choosen){
    const choosenCat = document.createElement("h3");
    choosenCat.textContent = choosen.cat;
    const addedProd = document.createElement("li");
    addedProd.appendChild(document.createTextNode(`${choosen.sellingPrice} - ${choosen.product} - ${choosen.cat}`));
    const delbtn = document.createElement("button");
    delbtn.appendChild(document.createTextNode("Remove"));
    addedProd.appendChild(delbtn);

    const Productlist = document.querySelector("ul");
    Productlist.appendChild(choosenCat);
    Productlist.appendChild(addedProd);
    delbtn.addEventListener("click",function(event){
        Productlist.removeChild(event.target.parentElement);
        Productlist.removeChild(choosenCat)
        const prodId = choosen._id;

        axios
        .delete(`https://crudcrud.com/api/c602cb0307134efc896f139c3c2e47e5/AddingToCart/${prodId}`)
         .then((res)=>{
            Productlist.removeChild(event.target.parentElement);
         })
         .catch((err) =>{
            console.log(err);
         })
    })
    document.getElementById("sellingPrice").value = choosen.sellingPrice;
    document.getElementById("product").value = choosen.product;
    document.getElementById("cat").value = choosen.cat;
}