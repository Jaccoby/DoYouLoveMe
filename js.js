let box = document.getElementById("box");


// "YES" Answer 
document.querySelector(".yes").addEventListener("click", function() {
    let message = document.querySelector(".text");
    let question = document.querySelector(".answer");
    let buttons = document.querySelector(".buttons");
    
    buttons.style.display = "none";
    message.style.display = "none";
    question.style.display = "flex";

});



// "NO" moviment
document.querySelector(".no").addEventListener("mouseover", function () {
    let width = window.innerWidth - 500;
    let height = window.innerHeight - 500;
  
    this.style.position = "absolute";
    this.style.top = Math.random() * height + "px";
    this.style.left = Math.random() * width + "px";
});
