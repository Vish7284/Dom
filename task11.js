/*1. Use DOM Manipulation to add another input element inside form,
 before the button. This input element will take the description of the fruit.

2. Use DOM Manipulation to show the fruit description (in italics) on screen 
alongwith the fruit name. This description should be shown in the next line 
(HINT: To show description on next line you can make use of the paragraph tag).

3. Now, create a filter that shows only those fruits whose either name or description 
or both matches the entered text. */

const form = document.querySelector('form');
const button = document.querySelector('button');
const newip = document.createElement('input');
newip.type ='text';
newip.name ='description';
newip.className='description';
form.insertBefore(newip,button);
const para = document.createElement('p');
const paraText = document.createTextNode(name.value)
para.appendChild(paraText);

//Filter 
const filter = document.getElementById('filter');
filter.addEventListener('keyup',function(event){
    const typedText = event.target.value.toLowerCase();
    const fruit = document.getElementsByClassName('fruit');
    for(let i=0;i<fruit.length;i++){
        const currfruitText= fruit[i].firstChild.textContent.toLowerCase();
        if(currfruitText.indexOf(typedText) === -1){
            fruit[i].style.display ='none';
        }
        else{
            fruit[i].style.display = 'flex';
        }
    }
})