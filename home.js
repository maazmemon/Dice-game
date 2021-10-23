var randomnumber = Math.floor(Math.random()*6)+1;

var randomdiceimage = 'dice'+ randomnumber + ".png";

var randomsourceimage = "assets/"+ randomdiceimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomsourceimage);



var randomnumber1 = Math.floor(Math.random()*6)+1;

var randomdiceimage1 = 'dice'+ randomnumber1 + ".png";

var randomsourceimage1 = "assets/"+ randomdiceimage1;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomsourceimage1);

if (randomnumber > randomnumber1){
  document.querySelector("h1").innerHTML = ' 👍 PLAYER 1 WINS....!!!'
}

else if (randomnumber < randomnumber1){
    document.querySelector("h1").innerHTML = ' 👍 PLAYER 2 WINS....!!!'
}
 else {
    document.querySelector("h1").innerHTML = ' 😢 GAME IS DRAW'
 }