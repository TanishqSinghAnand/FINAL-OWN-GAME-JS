var player , Img_Player;
var advisor , Img_Advisor;
var canvas ;
let score = 0 ;
var back = "black";
let gamestate = 0;
var form ;
var database ;
var index ;
function setup(){
    textSize(20);
    canvas = createCanvas(1300,600);
    form = new Form();
    database = firebase.database();
    index = database.ref('index') ;


}

function draw(){
  background("BLACK");
  textSize(20);
  fill(rgb(255,100,150));
  text("Score : " + score , 15,15);
  if(gamestate === 0 /*&& mousePressedOver !== sbutton */){
    text("Hey , I am your advisor throught the game . ",640,150);
    text("Please enter your name below and click submit",640,170);
  }
  form.hidef();
  form.display();
  textSize(50);
  fill(rgb(255,150,100));
  text("👱🏻‍♂️",10,420);
  textSize(70);

  text("👨",1100,150);


  drawSprites();
}
