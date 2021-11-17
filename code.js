var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1905accd-f984-411a-9c93-53150117681e"],"propsByKey":{"1905accd-f984-411a-9c93-53150117681e":{"name":"green_dress_1","sourceUrl":null,"frameSize":{"x":133,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"4.cCV6blHxgeL4_quP7XMyRfEEuzwDOB","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":133,"y":400},"rootRelativePath":"assets/1905accd-f984-411a-9c93-53150117681e.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//create all the sprites
var start = createSprite(30,100,18,18)
start.shapeColor = "green"

var end = createSprite(360,120,18,18)
end.shapeColor = "red"

var sofia = createSprite(30,100,18,18)
sofia.shapeColor = "blue"

var GameState ="serve" 

//create all the walls
var w1 = createSprite(0,52,20,800)

var w2 = createSprite(0,400,800,20)

var w3 = createSprite(400,400,20,800)

var w4 = createSprite(400,0,800,20)

var w5 = createSprite(0,130,110,10)

var w6 = createSprite(54,95,10,80)

var w7 = createSprite(94,50,90,10)

var w8 = createSprite(0,210,90,10)

var w9 = createSprite(40,227,10,42)

var w10 = createSprite(0,320,90,10)

var w11 = createSprite(40,336,10,42)

var w12 = createSprite(92,395,10,600)

var w13 = createSprite(100,170,90,10)

var w14 = createSprite(125,130,10,70)
 
var w15 = createSprite(140,300,100,10)

var w16 = createSprite(190,275,10,60)

var w17 = createSprite(170,240,50,10)

var w18 = createSprite(145,254,10,37)

var w19 = createSprite(135,270,30,10)

var w20 = createSprite(93,390,10,60)

var w21 = createSprite(108,360,40,10)

var w22 = createSprite(390,96,190,10)

var w23 = createSprite(324,128,10,210)

var w24 = createSprite(294,230,70,10)

var w25 = createSprite(260,275,10,140)

var w26 = createSprite(215,205,100,10)

var w27 = createSprite(270,145,100,10)

var w28 = createSprite(236,190,10,38)

var w29 = createSprite(220,145,90,10)

var w30 = createSprite(174,135,10,30)

var w31 = createSprite(324,30,10,40)

var w32 = createSprite(388,9,120,170)

var w33 = createSprite(206,100,10,100)

var w34 = createSprite(191,45,40,10)

var w35 = createSprite(270,11,10,60)

var w36 = createSprite(256,40,40,10)

var w37 = createSprite(260,110,10,70)

var w38 =createSprite(252,342,150,10)

var w39 = createSprite(370,290,100,10)

var w40 = createSprite(330,230,50,10)

var w41 = createSprite(390,195,50,10)

var w42 = createSprite(330,145,50,10)



//create all the 
function draw() { 
  
if(GameState == "serve"){
}  
  
if(GameState == "play"){
}

if(GameState == "end"){
}

textSize(10)
text("Press enter to start",200,190)
fill("red") 
  
  

if(keyDown("right")){
sofia.x=sofia.x+3
}

if(keyDown("left")){
sofia.x=sofia.x-3
}

if(keyDown("up")){
sofia.y=sofia.y-3  
}

if(keyDown("down")){
sofia.y=sofia.y+3  
}

if(sofia.isTouching(end))


//create all the edges so that sofia doesn't wander of and never come back
createEdgeSprites()



//make the background black
  background("white")
  
textSize(20)
textFont("Arial")
fill("red")
text("end",345,176)

textSize(20)
textFont("Arial")
fill("green")
text("start",30,32)
  
  
//make all the sprites appear on the screen  
  drawSprites()
  
//make sofia bounce off all the walls   
  sofia.bounceOff(w1)
  sofia.bounceOff(w2)
  sofia.bounceOff(w3)
  sofia.bounceOff(w4)
  sofia.bounceOff(w1)
  sofia.bounceOff(w5)
  sofia.bounceOff(w6)
  sofia.bounceOff(w7)
  sofia.bounceOff(w8)
  sofia.bounceOff(w9)
  sofia.bounceOff(w10)
  sofia.bounceOff(w11)
  sofia.bounceOff(w12)
  sofia.bounceOff(w13)
  sofia.bounceOff(w14)
  sofia.bounceOff(w15)
  sofia.bounceOff(w16)
  sofia.bounceOff(w17)
  sofia.bounceOff(w18)
  sofia.bounceOff(w19)
  sofia.bounceOff(w20)
  sofia.bounceOff(w21)
  sofia.bounceOff(w22)
  sofia.bounceOff(w23)
  sofia.bounceOff(w24)
  sofia.bounceOff(w25)
  sofia.bounceOff(w26)
  sofia.bounceOff(w27)
  sofia.bounceOff(w28)
  sofia.bounceOff(w29)
  sofia.bounceOff(w30)
  sofia.bounceOff(w31)
  sofia.bounceOff(w32)
  sofia.bounceOff(w33)
  sofia.bounceOff(w34)
  sofia.bounceOff(w35)
  sofia.bounceOff(w36)
  sofia.bounceOff(w37)
  sofia.bounceOff(w38)
  sofia.bounceOff(w39)
  sofia.bounceOff(w40)
  sofia.bounceOff(w41)
  sofia.bounceOff(w42)

}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
