let menubtn=document.querySelector('.burger')
let menu=document.querySelector('.nav-links')

menubtn.addEventListener("click",()=>{
    menu.classList.toggle("menu-show")
    if(menu.classList.contains("menu-show")){
        menubtn.innerHTML=`&#${10006}`
    }else{
        menubtn.innerHTML=`&#${9776}`
    }
})