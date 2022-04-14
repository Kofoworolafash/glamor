

 
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


const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");


modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});

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



