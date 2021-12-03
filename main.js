noseX=0;
noseY=0;
difference=0;
rightWristx=0;
leftWristx=0;

function preload(){

}
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);


    canvas = createCanvas(550, 550);
    canvas.position(560, 150);


    posenet=ml5.poseNet(video, modalLoaded);
    posenet.on('pose', gotResult);
}
function draw(){
    background("#2ff172")
    fill("#c9f209");
    stroke("#94765c");
    square(noseX, noseY, difference);

    document.getElementById("sqaure_side").innerHTML ="The width and height of your square will be "+difference+"px";
}

function modalLoaded(){
    console.log("Modal has been loaded");
}
function gotResult(results){
    if(results.length > 0){
        console.log(results);

            
    
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log(noseX);
        console.log(noseY);
        rightWristx=results[0].pose.rightWrist.x;
        leftWristx=results[0].pose.leftWrist.x;
        difference=floor(leftWristx-rightWristx);

        console.log("The position of the left wrist is "+leftWristx+" and the right is "+rightWristx);
    }
}