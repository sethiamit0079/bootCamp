
var randomNumber1 = Math.floor(Math.random()*6)+1; //1-6
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice"+ randomNumber1 +".png";  //dice1.png
var randomImagesSource1 = "images/"+randomDiceImage; //images.dice1.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesSource1);


var randomImagesource2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImagesource2);

if(randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML="Player1 won ";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player2 won";
}else{
    document.querySelector("h1").innerHTML="Draw";
}

