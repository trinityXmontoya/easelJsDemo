window.onload = init;

var stage;

function init(){
  stage = new createjs.Stage("myCanvas");
  loadMainWindow();
};

function loadMainWindow(){
  loadBall();
};

function updateStage(){
  stage.update();
};

function loadBall(){
  var ball = new createjs.Shape();

  ball.graphics.beginFill("#000").drawCircle(0,0, 50);
  ball.x= 50;
  ball.y = 200;
  createjs.Tween.get(ball,{loop: true}).to({x:450}, 3000).to({x:50}, 3000);
  createjs.Ticker.on("tick", updateStage);

  ball.on("click",handleClick);

  stage.addChild(ball);
};

function handleClick(){
  addImage();
  playSound();
};

function playSound(){
  var beep = new Audio("http://www.soundjay.com/button/beep-08b.mp3");
  beep.play();
};

function addImage(){
  // var flower = new Image();
  // flower.src = 'http://images.sodahead.com/profiles/0/0/1/8/5/7/1/2/1/Sunflower-49143396964.png';
  // flower.style.position = 'relative';
  // flower.style.marginTop = (Math.random()*500) + 'px';
  // flower.style.marginLeft = (Math.random()*500) + 'px';

  var flower = new createjs.Bitmap("http://images.sodahead.com/profiles/0/0/1/8/5/7/1/2/1/Sunflower-49143396964.png")
  flower.x = Math.random()*500;
  flower.y = Math.random()*500;
  stage.addChild(flower);
};
