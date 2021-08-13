var gr,block1,block2,block3,block4,block5,block6,block7,block8,block9;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world,engine;
var ni,nii
function preload()
{
 nii=loadImage("night.png")	
}

function setup() {
	createCanvas(870, 500);

  
	engine = Engine.create();
	world = engine.world;
	gr=new Ground (405,350,270,20)
    br=new Ground (700,300,260,20)
    m=new G(400,490,1000,20)
    block1=new Blocks(300,327,30,30)
	block2=new Bl(330,327,30,30)
	block3=new By(360,327,30,30)
	block4=new Bi(390,327,30,30)
	block5=new Blocks(420,327,30,30)
	block6=new Bl(450,327,30,30)
	block7=new By(480,327,30,30)
	block8=new Bi(510,327,30,30)

	block10=new Blocks(330,297,30,30)
	block12=new Bl(360,297,30,30)
	block13=new By(390,297,30,30)
	block14=new Bi(420,297,30,30)
	block15=new Blocks(450,297,30,30)
	
	block17=new By(480,297,30,30)
	block18=new Bi(360,267,30,30)
	block19=new Blocks(390,267,30,30)
	block20=new Bl(420,267,30,30)
	block21=new By(450,267,30,30)
	block22=new Blocks(390,237,30,30)
	block23=new Bl(420,237,30,30)
	block24=new By(403,207,30,30)

    block25=new Blocks(600,287,30,30)
	block26=new Bl(630,287,30,30)
	block27=new By(660,287,30,30)
	block28=new Bi(690,287,30,30)
	block29=new Blocks(720,287,30,30)
	block30=new Bl(750,287,30,30)
	block31=new By(780,287,30,30)
	block32=new Bi(910,287,30,30)

	block33=new Blocks(630,267,30,30)
	block34=new Bl(660,267,30,30)
	block35=new By(690,267,30,30)
	block36=new Bi(720,267,30,30)
	block37=new Blocks(750,267,30,30)
	
	block38=new By(660,247,30,30)
	block39=new Bi(690,247,30,30)
	block40=new Blocks(720,247,30,30)
	
	block42=new By(690,267,30,30)

    b=new Ball(130,300,20)
    r=new Rope(b.body,{x:130, y:300});

	Engine.run(engine);
  
}


function draw() {
  background("lightblue");
if(hour>=06&&hour<=18){
    background("lightBlue")
}else{
    background(nii)
}
  gr.display();
  br.display();
  m.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block10.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();

  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  
  block42.display();
 
  b.display();
 r.display();



  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(b.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    r.fly();
}
function keyPressed(){
if(keyCode===32){
    r.attach(b.body)
}
}
async function getBackgroundImage(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
}
