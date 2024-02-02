/** Inside the first Div, after the main heading add a sub-heading (h3 tag) "Buy high quality organic fruits online".

2. Make the sub-heading text italic.

2. Inside the second Div, before the unordered list add a paragraph tag showing "Total fruits: 4".

3. On this paragraph tag set an id of "fruits-total".

 */
//addding heading h3
const divs = document.getElementsByTagName('div');
const firstdiv = divs[0];
const heading = document.createElement('h3');
heading.appendChild(document.createTextNode('Buy high quality organic fruits online'));
heading.style.fontStyle ='italic';
firstdiv.appendChild(heading);
const para =document.createElement('p');
para.appendChild(document.createTextNode('Total fruits : 4'));
para.id='fruits-total';
const fruits = document.querySelector('.fruits');

const secdiv = divs[1].insertBefore(para , fruits);