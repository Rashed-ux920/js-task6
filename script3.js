const hello = document.getElementById("hello")
const button = document.getElementsByTagName("button")
const retreve = document.getElementById("retreve")
var x

button[0].addEventListener("click",(e)=>{
    x = localStorage.getItem("text" , hello.value)
})
button[1].addEventListener('click', (e)=>{
    x = localStorage.getItem("text",hello.value)
    retreve.innerHTML = x
})
