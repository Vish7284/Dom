/**Deliverables:

1. In each "li" after the delete button add an edit button with class 
'edit-btn'.
Once you do this the output on the screen will look like this:
2. Now, implement the add and delete functionality just the way it is done in 
the video. 
There is only one difference that now the new 'li' element that you will 
create will have 
two buttons (delete and edit) instead of one button.
Note: You have to 
just add the edit button. You do not have to implement the edit functionality. */

const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');
form.addEventListener('submit',function(event){
  event.preventDefault();
  const fruitToAdd = document.getElementById('fruit-to-add');
  const newLi = document.createElement('li');
  const newLItext = document.createTextNode(fruitToAdd.value);
  newLi.appendChild(newLItext);
  newLi.className='fruit';
  const delbtn = document.createElement('button');
  const delbtnText = document.createTextNode('x');
  delbtn.appendChild(delbtnText);
  delbtn.className='delete-btn';
  newLi.appendChild(delbtn);
  const editbtn = document.createElement('button');
const editbtnText  = document.createTextNode('Edit');
editbtn.appendChild(editbtnText);
editbtn.className = 'edit-btn';
  newLi.appendChild(editbtn);
  fruits.appendChild(newLi);
  
})
fruits.addEventListener('click',function(event){
  if(event.target.classList.contains('delete-btn')){
    const fruitToDel = event.target.parentElement;
    fruits.removeChild(fruitToDel);
  }
})
function myfunc(li){
const editbtn = document.createElement('button');
const editbtnText  = document.createTextNode('Edit');
editbtn.appendChild(editbtnText);
editbtn.className = 'edit-btn';
li.appendChild(editbtn);
}
const fruitItem = document.querySelectorAll('li');

const b = Array.from(fruitItem);
b.forEach(myfunc);
