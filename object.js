//Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.

// function Cylinder( radius,height){
//       this.radius=radius,
//       this.height=height,
//       this.volume=function(){
//         return Math.PI*radius*radius*height
//       }
// }

// let ans=new Cylinder(5,5)
// console.log("volume of cylender is:"+ ans.volume())


//Write a bubble sort algorithm in JavaScript.

// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped=false
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]>arr[i+1]){
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//             swapped=true    
//         }
//     }
//     } while(swapped)
// }
// const arr=[8,20,-2,4,-6]
// bubbleSort(arr)
// console.log(arr)


//7. Write a JavaScript program that returns a subset of a string.


// let str="DOG"

// let str1=[]

// for(let i=0;i<str.length;i++){
//     for(let j=i+1;j<str.length+1;j++){

//         let sub=str.substring(i,j)
//         str1.push(sub)
//     }
// }

let head=document.createElement('h1')
let head1=document.createElement('h1')
document.body.append(head,head1)

//head.innerHTML=str1


// Write a JavaScript program to calculate circle area and perimeter.//
//Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user

// let r=parseInt(prompt('enter radius'))
// function Circle(r){
//     this.r=r
//     this.area=function(){
//         return Math.PI*r*r
//     }
//     this.perimeter=function(){
//         return 2*Math.PI*r
//     }
// }

// const ans=new Circle(r)
// head.innerHTML="the area of circle is:"+ ans.area()
// head1.innerHTML="the perimeter of circle is"+ ans.perimeter()
