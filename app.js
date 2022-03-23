let input = document.getElementById("Input");
let del = document.getElementById("del");
let show = document.getElementById("show")

input.addEventListener("keypress",function(){
    del.classList.add("feather-x")
    show.classList.add("btn")
})

del.addEventListener("click",function(){
    input.value=""
    del.classList.remove("feather-x")
})