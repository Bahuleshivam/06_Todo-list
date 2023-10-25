const textbox = document.getElementById('textbox')
const btndone = document.getElementById('btndone')
const ListToDisplay = document.querySelector('.List')



let input = "";

textbox.addEventListener("change", (e) => {
     input = e.target.value;
})

btndone.addEventListener("click", () => {
     let ele = document.createElement("li")
     ele.classList.add('ul-li')
     ele.innerHTML = input;
     ListToDisplay.prepend(ele)
     textbox.value = ""
})



