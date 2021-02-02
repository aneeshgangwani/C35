var ball;
var dbase;
var Pos;

function setup(){
    dbase=firebase.database();
    console.log(dbase);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballpos=dbase.ref("ball/position");
    ballpos.on("value",readPosition,showError);

}

function draw(){
    background("white");
    if(Pos!==undefined){

    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
}
    drawSprites();
}
 
  function readPosition(data){
    Pos=data.val();
    ball.x=Pos.x;
    ball.y=Pos.y;
  }

function writePosition(x,y){
  dbase.ref("ball/position").set({x:Pos.x+x,y:Pos.y+y});
}

function showError(){
    console.log("error");
}
