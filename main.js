img = "";
objects=[];
status="";
var r="";
var g="";
var b="";
function setup() {
    canvas = createCanvas(400,400);
    canvas.center();
    cocossd= ml5.objectDetector('cocossd',modelLoaded );
    document.getElementById("status").innerHTML="Detecting Image";
    
    video= createCapture(VIDEO);
video.size(380,380);
video.hide();

}

function preload() {
    

}

function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    cocossd.detect(video, gotResult);
}

function draw() {
    image(video, 0, 0, 380,380);
  r= random (255);
  g=random (255);
  b=random (255);

  
for(i=0; i<objects.length; i++){
percent=floor(objects[i].confidence*100);
fill (r,g,b);
document.getElementById("status").innerHTML="Hmmmm...";
text(objects[i].label+" "+percent+ " %", objects[i].x, objects[i].y);
noFill();
stroke (r,g,b);
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
document.getElementById("status").innerHTML="Mission Accomplished!!";

if(status!= ""){
    document.getElementById("numberOfSpan").innerHTML="Number Of Objects:- "+objects.length;
}

}



}

function gotResult(result, error){
    if (result){
        console.log(result);
objects=result;
console.log(typeof objects);
      
    }
    else{
        console.log(error);
    }
}