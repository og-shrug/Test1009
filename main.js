var video = "";
var objects = [];

function preload(){
    video = createVideo('video.mp4');
    video.hide();

}

function setup(){
    canvas = createCanvas(480 , 380);
    canvas.center();
}

function gotResult( error , results){
    if (error){
        console.log(error);
    
    }
    
        console.log(results);
        objects = results;    
    
    }
function draw(){
    image(video, 0, 0, 480, 380);
    if (status != ""){
        objectDetector.detect(video, gotResult)
        for(i=0; i < objects.length; i++){
        document.getElementById("Detect_Text").innerHTML = "Status : Objects Detected";
        document.getElementById("num_of_obj").innerHTML = "Number Of Objects Detected :" + objects.length;

        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(object[i].label +" "+ percent +"%"+ objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, object[i].width, objects[i].height)
        }
    }

}


function startit(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("Detect_Text").innerHTML = "Status : Detecting Objects ";
}

function modelLoaded(){
    console.log("Model Loaded : ready to Detect");
    status = true;
    video.loop();
    video.volume(1);
    video.speed(0);
}