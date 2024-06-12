const hello = document.getElementById("hello")
const button = document.getElementsByTagName("button")
const retreve = document.getElementById("retreve")
var x = []
const display = document.getElementById('bool')

button[0].addEventListener('click',(e)=>{
    
     x = localStorage.setItem("text",hello.value)


})

button[1].addEventListener('click', (e)=>{
    x = localStorage.getItem("text",hello.value)
    retreve.innerHTML = x
})
button[2].addEventListener( 'click', (e)=>{
     x = localStorage.removeItem("text")
    })
button[3].addEventListener("click", (e) =>{
    if (localStorage.getItem("text")) {
        display.innerHTML = " yes the item is in the localstorage"
    }
    else{

        display.innerHTML = "no it is not in localstorge"
    }
})  