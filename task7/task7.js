/**1. Inside the first Div, after the main heading add
 *  a sub-heading (h3 tag) "Buy high quality organic 
 * fruits online".

2. Make the sub-heading text italic.

2. Inside the second Div, before the unordered list add a 
paragraph tag showing "Total fruits: 4".

3. On this paragraph tag set an id of "fruits-total".

 */

const para = document.createElement('p');
const paraText = document.createTextNode('Total fruits : 4');
para.appendChild(paraText);
para.id ='fruits-total';
const divs = document.getElementsByTagName('div');
const secDiv = divs[1];
const fruits = document.querySelector('.fruits');
secDiv.insertBefore(para,fruits);
const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.fontStyle = 'italic';
const firstDiv = divs[0];
const subh = document.createElement('h3');
const subhText = document.createTextNode('Buy high quality oraganic fruits online');
subh.appendChild(subhText);
firstDiv.appendChild(subh);
console.log(firstDiv);
