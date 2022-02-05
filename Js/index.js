// let btn=$("#btn");
// console.log(btn[0]);
// $("#btn").on("click",function(){
//   console.log("salom");
// })
// $("#btn").css({
//     "border": "none",

//     "background-color": "red",
//     "border-radius": "10px",
//   });
// $(".input").on("input",function(){
//     $(".box").css(
//         "width",($(".input").val().length*100/$(".input").attr("maxlength"))+"%"
       
//     )
//     let rgb1=Math.random()*256;
//     let rgb2=Math.random()*256;
//     let rgb3=Math.random()*256;
//     $("h1").html($(".input").val());
//     $("h1").css(
//       "color",`rgb(${rgb1},${rgb2},${rgb3})`  
//     )
//     let h1=$("h1");
//     console.log(h1);
// })
// $(".input").on("keydown",function(event){
//   if(event.code=="Backpace"){
//     console.log("salom");
//   }
// })
// $(".input1").on("input",function(){
//   let rgb1=Math.random()*256;
//   let rgb2=Math.random()*256;
//   let rgb3=Math.random()*256;
//   let input1=$(".input1").val();
//   let h2=document.querySelector(".h2");
//   let  x=input1.slice($(".input1").val().length-1);
//   if(true){
//   h2.innerHTML+=`<span style="color:rgb(${rgb1}, ${rgb2}, ${rgb3});">${x}</span>`;
 
// }
 
// for(let i=1;i<$(".input1").attr("maxlength");i++){

// }


// });
// $(document).ready(function(){
//   $(".btn1").on("click",function(){
//     $(".box2").toggleClass("box1");
//   })
// })

// $(".input3").on("input",function(){
//   let arr1=$(".input3").val().split("");
//   console.log(arr1);
//   document.querySelector(".pi").innerHTML+=`<span style="color:red;">${arr1[arr1.length-1]}</span>`

   
  
  
// })
// $("img").on("click",function(){
//   $(this).hide();
// })
// $(".btn3").on("click",function(){
//   $("img").fadeIn(2000)
//   console.log("salom");
// })
// $(".btn2").on("click",function(){
//   $("img").fadeOut(2000)
// })
// $(".btn4").on("click",function(){
//   $("p").slideUp()
// })
// $(".btn5").on("click",function(){
//   $("p").toggle()
// })
let students="";
console.log("javob");
$.ajax({
  url:"https://studentcrudforlesson.herokuapp.com/api/student/get",
  method:"get",
  success:function(javob){
    students=javob;
    console.log(javob);
    chiz();
  },
  error:function(error){
$("h2").html("xatolik yuz berdi")
  },
})
const chiz=()=>{
  let mytext="";
  students.forEach((student,index)=>{
    mytext+=`<tr>
    <th scope="row">${index+1}</th>
    <td>${student.firstname}</td>
    <td>${student.lastname}</td>
    <td>${student.username}</td>
    <td>${student.phoneNumber}</td>
  </tr>`;
  });
  $(".tablebody").html(mytext);
}