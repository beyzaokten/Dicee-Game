var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var diceImage="dice"+randomNumber1+".png";
var imageSource="images/"+diceImage;
var diceImage2="dice"+randomNumber2+".png";
var imageSource2="images/"+diceImage2;

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",imageSource);
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",imageSource2);

var result=document.querySelector("h1");
if(randomNumber1==randomNumber2){
result.innerHTML="Draw!";
}
else if(randomNumber1>randomNumber2){
    result.innerHTML="Player 1 wins!";
}
else{
    result.innerHTML="Player 2 wins!";
}

