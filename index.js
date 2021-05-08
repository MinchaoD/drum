

for (var i=0;i<document.querySelectorAll(".drum").length;i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    makeSound(this.innerHTML);
    makeAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown",function(event){
  makeSound(event.key);
  makeAnimation(event.key);
});

function makeSound(letter){
  switch (letter) {
    case "P":
    var audio1=new Audio('sounds/crash.mp3');
    audio1.play();
      break;
    case "K":
    var audio2=new Audio('sounds/kick-bass.mp3');
      audio2.play();
        break;
    case "B":
    var audio3=new Audio('sounds/snare.mp3');
      audio3.play();
        break;
    case "O":
    var audio4=new Audio('sounds/tom-1.mp3');
      audio4.play();
        break;
    case "D":
    var audio5=new Audio('sounds/tom-2.mp3');
      audio5.play();
        break;
    case "T":
    var audio6=new Audio('sounds/tom-3.mp3');
      audio6.play();
        break;
    case "A":
    var audio7=new Audio('sounds/tom-4.mp3');
      audio7.play();
        break;
    default:
  }
}

function makeAnimation(letter){
  document.querySelector("."+letter).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+letter).classList.remove("pressed")},1000);
}
