/**Deliverable:

1. Make the 3rd element in the list have yellow background color.

2. Make all the elements in the list have bold font.

 */
const fruits=document.getElementsByClassName('fruit');
fruits[2].style.backgroundColor = "yellow";
for(let i=0;i<fruits.length;i++){
    fruits[i].style.fontWeight ="bold";
}
