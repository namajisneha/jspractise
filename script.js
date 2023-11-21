// let btn = document.querySelector('.serach_filter_button')
// let filter= document.querySelector('.filter_hid')
// let names= document.querySelector('.names_div')
// let btn1=document.querySelector('.serach_filter_buttona')
// // btn.setAttribute("class","addsub")
// filter.setAttribute("class","filterdiv")
// btn .addEventListener("click",(e)=>{
//     btn.style.display="none"
//     filter.style.display="inline"
// })
// btn1.addEventListener('click',(el)=>{
//     filter.style.display="none"
//     filter.setAttribute("class","")
//     names.setAttribute("class","namestran")
//     // names.style.transition="margin-top 8s ease-in-out 5s" 
// })


// let btn = document.querySelector('.add_but')
// let itemsa = document.querySelector('.items_main_div')
// itemsa.setAttribute("id","additemsss")
// itemsa.style.display="none"
// btn.addEventListener("click",(e)=>{
//     console.log("object");
//     // itemsa.style.display="inline"
//     // itemsa.setAttribute("id","")
//     // itemsa.setAttribute("class","sasa")
// })
let btn = document.querySelector('.add_but');
let names = document.querySelector('.items_main_div');

names.style.display = "none";

btn.addEventListener("click", (e) => {
  btn.style.display = "none";
  names.style.display = "block"; // or "inline" depending on the element type
});
