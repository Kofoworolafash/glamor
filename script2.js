

let menubar=document.querySelector('#menu-bar');
let mynav=document.querySelector('.navbar');



menubar.onclick = () =>{
  mynav.classList.toggle('active')
 }
 


 const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () =>{
    // change the theme of the website
     document.dark-light.classList.toggle('dark')
});