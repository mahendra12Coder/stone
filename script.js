let counter = -1;

let count = document.querySelector("#count")

document.querySelector("#increase").addEventListener("click",()=>{
    
    count.innerText = counter++;
})



document.querySelector("#decrease").addEventListener("click",()=>{
    
    count.innerText = counter--;
})
