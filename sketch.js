var canvas;
var music;
var blue1,yellow1,red1,green1;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box=createSprite(400,300,20,20);
    box .velocityY=5;
    box.velocityX = 5;
    edges = createEdgeSprites()
    //create 4 different surfaces
    blue1 = createSprite(100,580,160,10);
    blue1.shapeColor = ("blue")
    yellow1 = createSprite(300,580,160,10);
    yellow1.shapeColor=("yellow")
    red1 = createSprite(500,580,160,10);
    red1.shapeColor=("red")
    green1 = createSprite(700,580,160,10);
    green1.shapeColor=("green")


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    music.play()
    if (box.isTouching(red1)&& box.bounceOff(red1)){
        box.shapeColor="red"
    }
    if(box.isTouching(green1)&&box.bounceOff(green1)){
        box.shapeColor="green"
    }

    if(box.isTouching(yellow1)&&box.bounceOff(yellow1)){
        box.shapeColor="yellow"
    }
    if(box.isTouching(blue1)){
        box.shapeColor="blue"
    }
    box.bounceOff(edges);

    drawSprites();

    //add condition to check if box touching surface and make it box
}
