/**Deliverable:

1. Change the color of 5th "li" tag (one with "Mango" written inside it) to blue.

2. Make all the "li" tags italic.

 */
const list = document.getElementsByTagName('li');
list[4].style.color="blue";
for(let i=0;i<list.length;i++){
    list[i].style.fontStyle ="italic";
}