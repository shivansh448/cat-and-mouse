var bgImg
var cat , catImg1,catImg2,catImg4
var mouse , mouseImg1,mouseImg2,mouseImg4

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png")
    catImg1=loadAnimation("images/cat1.png")
    catImg2=loadAnimation("images/cat2.png","images/cat3.png")
    mouseImg1=loadAnimation("images/mouse1.png")
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg4=loadAnimation("images/mouse4.png")
    catImg4=loadAnimation("images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here


cat=createSprite(900,730,100,30)
cat.addAnimation("catRunning",catImg1)
cat.scale=0.15

mouse=createSprite(200,700,50,30)
mouse.addAnimation("mouseRunning",mouseImg1)
mouse.scale=0.15
}

function draw() {

    background(bgImg);



    //Write condition here to evalute if tom and jerry collide
   
    if(cat.x-mouse.x <(cat.width-mouse.width)/2){
    
            cat.addAnimation("cathappy ",catImg4)
            mouse.addAnimation("mousehappy",mouseImg4)
        }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if(keyCode === RIGHT_ARROW ){
 mouse.addAnimation("mouseTeasing",mouseImg2)
mouse.changeAnimation("mouseTeasing")
mouse.frameDelay = 25


}

if(keyCode === LEFT_ARROW){
    cat.addAnimation("catRunning",catImg2)
    cat.changeAnimation("catRunning")
    cat.frameDelay = 25
    cat.x=cat.x-20
}


}
