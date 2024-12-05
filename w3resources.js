let container=document.createElement('div')

let para=document.createElement('p')
 para.innerText="Khushi My wife as well as My Everything"

 let btn=document.createElement('button')
 btn.innerText='change style'

document.body.appendChild(container)

container.append(para,btn)


btn.addEventListener('click',()=>{
    para.style.color="red"
    para.style.fontSize="40px"
    para.style.fontFamily="aerial"

    
})

let box=document.createElement('div')
let btn1=document.createElement('button')
btn1.innerText='show image'

let image1=createElement("img")

document.body.appendChild(box)

box.appendChild(btn1,image1)

btn.addEventListener('click',()=>{
      
 let show= image1.src='/dog.webp'
   container.innerHTML=show
})



