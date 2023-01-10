const colors = ["red","green","black","white","pink","yellow","blue"];
const click = document.getElementById("click");
const color = document.querySelector(".color");

clique.addEventListener ("click",  function(){
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}