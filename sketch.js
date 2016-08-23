var state;
var buttons;
var mouse;
var setting;
var w = 255;
var sz;

var gemY = -500;
var gemVel = 5;
var loaded = false;
function setup() {
  var density = displayDensity();
  pixelDensity(density);
  mouse = createVector(mouseX, mouseY);
  state = "menu";
  createCanvas(windowWidth, windowHeight);
  
  sz = min(width, height)/1050;
  buttons = {
    "menu": [new Button(-200, -60, "About", "about"), new Button(-200, 60, "Projects", "projects"), new Button(-200, -180, "Contact", "contact")],
    "projects": [new Button(-(width/2 / sz) + 100, (height/2 / sz) - 100, "Back", "menu")],
    "about": [new Button(-(width/2 / sz) + 100, (height/2 / sz) - 100, "Back", "menu")],
    "contact": [new Button(-(width/2 / sz) + 100, (height/2 / sz) - 100, "Back", "menu")],
  }
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
}



function hexagon(xPos, yPos, size, rot, fillCol, strokeCol,stretch,isStroke) {
      push();
    scale(1,stretch);
    fill(fillCol);
    if(isStroke) {
    stroke(strokeCol);
    strokeWeight(2);
    } else {
     noStroke();   
    }
    beginShape();
    for (var r = 0 + rot; r < 360 + rot; r += 60) {
        var x = size/2 * cos(r) + xPos;
        var y = size/2 * sin(r) + yPos;
        vertex(x, y);
    }
    endShape(CLOSE);
    pop();
}

function logo(x,y,size) {
  push();
  scale(size);
  translate(x,y);
    strokeWeight(4);
  stroke(0);
hexagon(0,0,200,90,color(25, 158, 83),color(8, 120, 25),1.2,true);
    hexagon(0,0,165,90,color(255,255,255,70),color(0),1.2,false);
    noStroke();
    fill(255,255,255,100);
    triangle(0,-117,-85,-60,0,0);
    fill(255,255,255,50);
    triangle(85,59,0,0,86,-59);
    fill(255,255,255,60);
    triangle(-85,59,-85,-60,0,0);
    fill(0,0,0,20);
    triangle(0,117,0,0,-85,59);
    fill(0,0,0,10);
    triangle(0,118,87,58,0,0);
    triangle(0,-118,0,0,85,-60);
    
      rectMode(CENTER);

    fill(73, 201, 73);
    textFont("Ubuntu");
    textSize(20);
    textAlign(CENTER,CENTER);
    text("Karsten",0,150);
    fill(42, 150, 42);
    text("Anderson",0,175);
    textSize(10);
    text("EST 2002",0,200);
  
    stroke(42,150,0);
    strokeWeight(2);
    line(-55,190,55,190);

       
  pop();
}
function emerald(x,y,size) {
    push();
  scale(size);
  translate(x,y);
    strokeWeight(4);
  stroke(0);
hexagon(0,0,200,90,color(25, 158, 83),color(8, 120, 25),1.2,true);
    hexagon(0,0,165,90,color(255,255,255,70),color(0),1.2,false);
    noStroke();
    fill(255,255,255,100);
    triangle(0,-117,-85,-60,0,0);
    fill(255,255,255,50);
    triangle(85,59,0,0,86,-59);
    fill(255,255,255,60);
    triangle(-85,59,-85,-60,0,0);
    fill(0,0,0,20);
    triangle(0,117,0,0,-85,59);
    fill(0,0,0,10);
    triangle(0,118,87,58,0,0);
    triangle(0,-118,0,0,85,-60);
    pop();
  
}

function draw() {
  noStroke();
  background(255,255,255);

  cursor(ARROW);
  
  push();
  translate(width/2, height/2);
  mouse.set((mouseX - width/2) / sz, (mouseY - height/2) / sz);
  scale(sz);
        rectMode(CENTER);
      emerald(0,-15,4);
      fill(255,255,255,200);
      rect(0,0,width*200,height*200)
      
  switch (state) {
    case "menu":

      
      logo(0, gemY, 1);
          if(loaded === false) {
    
    gemY += gemVel;
    gemVel -= 0.029;
    if(gemVel < 0) {
    gemVel = 0;

   
    }
          }
    break;
    
    case "about":
      fill(42+sin(frameCount*10)*10, 150+sin(frameCount*10)*10, 42+sin(frameCount*10)*10);
      textSize(70);
      textFont("Ubuntu");
      stroke(42, 150, 42);
      strokeWeight(2);
      text("Hello There.", -200, -210);
      noStroke();
      
      textSize(25);
      text("My name is Karsten Anderson. I'm a young programmer based in Minnesota.\n\n I discovered programming when I was on Khan Academy for school, and I saw the programming page.\n I watched the first tutorial video, drew a rectange, and I was hooked.\n Khan Academy's video tutorials and great live editor make it easy to learn.\n There were many talented people there, who were always willing to help me out.\n\n I soon fell in love with programming, and designing graphics on Khan Academy.\n I made several games as well, but my favorite part was always drawing.\n My dream job is to some day work at Microsoft Studios.\n\n This is my website, that I coded with p5.js.\n Feel free to check out some of my games and art while you're here!", 0, 60);
    break;
    
    case "projects":
      fill(42+sin(frameCount*10)*10, 150+sin(frameCount*10)*10, 42+sin(frameCount*10)*10);
      textSize(70);
      textFont("Ubuntu");
      stroke(42, 150, 42);
      strokeWeight(2);
      text("My Projects", -200, -140);
      noStroke();
      
      textSize(25);
      text("I haven't made anything yet.   :(", 0, 50);
    break;
    
    case "contact":
      fill(42+sin(frameCount*10)*10, 150+sin(frameCount*10)*10, 42+sin(frameCount*10)*10);
      textSize(70);
      textFont("Ubuntu");
      stroke(42, 150, 42);
      strokeWeight(2);
      text("Get in Touch.", -200, -130);
      noStroke();
      
      textSize(25);
      text("You can contact me with any of these accounts:\n\nMy email: example@email.com\n\nGitHub: https://github.com/CaptainProductions\n\nKhan Academy: khanacademy.org/callmecap", 0, 50);
    break;
  }
  
  for (var i in buttons[state]) {
    buttons[state][i].display();
  }
  
 
  rectMode(CORNER);
  fill(255, 255, 255, w);
  rect(-width, -height, width*2, height*2);
  
  pop();
  
  w = constrain(w, 1, 255);
  w /= 1.05;
}

function Button(x, y, txt, dest) {
  this.x = x;
  this.y = y;
  this.txt = txt;
  this.dest = dest;
  this.col = 20;
  
  this.display = function() {
    stroke(42,150,42);
    strokeWeight(2);
    fill(42,150,0,this.col);
    ellipse(this.x, this.y, 110, 110);
    

    
    fill(this.col);
    noStroke();
    textFont("Ubuntu");
    textSize(21);
    fill(42,150,42);
    text(this.txt, this.x, this.y + 1);
    
    if (dist(this.x, this.y, mouse.x, mouse.y) < 110/2) {
      cursor(HAND);
      this.col += 5;
    } else {
      this.col -= 5;
    }
    
    this.col = constrain(this.col, 20, 50);
  }
  
  this.onClick = function() {
    if (dist(mouse.x, mouse.y, this.x, this.y) < 110/2) {
      w = 255;
      state = this.dest;
    }
    
  }
};

function mouseClicked() {
  for (var i in buttons[state]) {
    buttons[state][i].onClick();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  sz = min(width, height)/1050;
  buttons = {
    "menu": [new Button(-200, -60, "About", "about"), new Button(-200, 60, "Projects", "projects"), new Button(-200, -180, "Contact", "contact")],
    "projects": [new Button(-(width/2 / sz) + 100, (height/2 / sz) - 100, "Back", "menu")],
    "about": [new Button(-(width/2 / sz) + 100, (height/2 / sz) - 100, "Back", "menu")],
    "contact": [new Button(-(width/2 / sz) + 100, (height/2 / sz) - 100, "Back", "menu")],
  }
}