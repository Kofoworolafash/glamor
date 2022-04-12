

let menubar=document.querySelector('#menu-bar');
let mynav=document.querySelector('.navbar');



menubar.onclick = () =>{
  mynav.classList.toggle('active')
 }

 
const tabs = document. querySelectorAll('[data-target'),
        tabContent = document. querySelectorAll('[data-content]')

        tabs.forEach(tab =>{
            tab.addEventListener("click", () => {
                const target = document. querySelector(tab.dataset.target)

                tabContent.forEach(tabContents =>{
                    tabContents.classList.remove('skills-active')
                })
                target.classList.add('skills-active')

        tabs.forEach(tab =>{
            tab.classList.remove('skills-active')
        })
        tab.classList.add('skills-active')
    })
})


const modalViews = document.querySelectorAll('.services-modal')
    modalBtns = document.querySelectorAll('.services-button')
    modalCloses = document.querySelectorAll('.services-modal-close')

    let modal = function(modalClick) {
        modalViews[modalClick].classList.add('active-modal')
    }


        modalBtns.forEach((modalBtn, i) => {
            modelBtn.addEventListener('click', () => {
            modal(i)
        })
    })


    modalCloses.forEach((modalClose) => {
        modelBtn.addEventListener('click', () => {
            modalViews.forEach((modalView) => {
        modalViews.classList.remove('active-modal')
    })
    })
}) 

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}
function blurFunc() {
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}
inputs.forEach((input) => {
    input.addEventListener("focus",focusFunc);
})
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}