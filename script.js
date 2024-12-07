
let rectangle=document.querySelector("#center")

// rectangle.addEventListener("mousemove",function(e){
//       let reclocation=rectangle.getBoundingClientRect()
//      let insiderec= e.clientX - Math.floor(reclocation.left)

//      if(insiderec<reclocation.width/2){
//         console.log('left')
//      } else{
//         console.log('right')
//      }
// })

rectangle.addEventListener('mousemove',function(e){
    let reclocation=rectangle.getBoundingClientRect()
    let insiderec=e.clientX - Math.floor(reclocation.left)

    if(insiderec< reclocation.width/2){
       
        let red=gsap.utils.mapRange(0,reclocation.width/2,255,0,insiderec)

        gsap.to(rectangle,{
            backgroundColor:`rgb(${red},0,0)`,
            ease:Power4
        })

        console.log("left")
    } else{
        
        let blue=gsap.utils.mapRange(reclocation.width/2,reclocation.width,0,255,insiderec)

        gsap.to(rectangle,{
            backgroundColor:`rgb(0,0,${blue})`,
            ease:Power4
        })

        console.log('right')
    }
})

rectangle.addEventListener('mouseleave',function(){
     gsap.to(rectangle,{
         backgroundColor:"white"
     })
})