/**1. Implement the code as shown in the video.

2. Use id as query to select the basket heading and set its color to brown.

3. Change the background color of even fruit items to red 
and change their text color to white.

 */
const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign='right';
const fruits =  document.querySelector('.fruits');
fruits.style.backgroundColor ='grey';
fruits.style.padding='30px';
fruits.style.margin ='30px';
fruits.style.borderRadius = '5px';
fruits.style.width ='50%';
fruits.style.listStyle ='none';
const  basketHeading = document.querySelector('h2');
basketHeading.style.marginLeft ='30px';
basketHeading.style.color ='green';
const fruit = document.querySelectorAll('.fruit');
for(let i=0;i<fruit.length;i++){
    fruit[i].style.backgroundColor ='white';
    fruit[i].style.margin='10px';
    fruit[i].style.padding ='10px';
    fruit[i].style.borderRadius ='5px';
}
const evenfruit = document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0;i<evenfruit.length;i++){
    evenfruit[i].style.backgroundColor='red';
    evenfruit[i].style.color='white';
}