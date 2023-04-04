let barsButton = document.querySelector("span#bars>img");
let mainMenu = document.querySelector("div.menu2");

barsButton.addEventListener("click",function(){
       mainMenu.classList.toggle("active");
})