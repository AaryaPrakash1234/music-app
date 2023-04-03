song_1="";
song_2="";
function preload(){
    song_1=loadSound("believer.mp3");
    song_2=loadSound("faded.mp3");
}
function setup(){
    canvas=createCanvas(500,400);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    poseNet= ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes);
}
function draw(){
    image(video,0,0,500,400);

function modelloaded(){
    console.log("model loaded");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("leftWristx ="+leftWristX+"leftWristY ="+leftWristY);
        console.log("rightWristx ="+rightWristX+"rightWristY ="+rightWristY);
    }
    }
}
