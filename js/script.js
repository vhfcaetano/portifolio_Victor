// Importações

const menuPort = document.querySelector(".menu-gallery");
const allLi = document.querySelectorAll("li")

allLi.forEach((li, index )=>{
    li.addEventListener("click", e =>{
        e.preventDefault()
        menuPort.querySelector(".select").classList.remove("select")
        li.classList.add("select")
    })
})


// function lerLista(){
//     menuPort.forEach((e) => {
//         console.log(e)
//         e.classList.remove("select")
//     })
// }

// function clickId(e){
//     const id = e.target
//     console.log(id)
// }

// lerLista()

// clickId()

