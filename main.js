let menubtn=document.querySelector('.burger')
let menu=document.querySelector('.nav-links')
let container=document.querySelector('.container-1')

// let imgs=["images/bg_2.jpg","images/bg_1.jpg","images/bg_2.jpg"]

// let currentIndex = 0;

// setInterval(() => {
//     container.classList.toggle(`show-img${currentIndex++}`)
// }, 5000)

menubtn.addEventListener("click",()=>{
    menu.classList.toggle("menu-show")
    if(menu.classList.contains("menu-show")){
        menubtn.innerHTML=`&#${10006}`
    }else{
        menubtn.innerHTML=`&#${9776}`
    }
})