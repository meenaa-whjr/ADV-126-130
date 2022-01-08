leftwrist=0;
rightwrist=0;
leftscore=0;
rightscore=0;
herbaltea="";
think="";
wildstrawberry="";
stillawake="";
bloom="";
function preload(){
herbaltea=loadSound("herbal-tea.mp3");
think=loadSound("timetothink.mp3");
wildstrawberry=loadSound("wildstrawberry.mp3");
stillawake=loadSound("stillawake.mp3");
}
function setup(){
canvas=createCanvas(700,600);
canvas.center();
webcam=createCapture(VIDEO);
webcam.size(700,600);
webcam.hide();
posenetmodel=ml5.poseNet(webcam,modelLoaded);
posenetmodel.on('pose', gotResults);
}
function draw(){
image(webcam,0,0,700,600);
//setting the rate with right wrist
if(rightscore>0.2){
    circle(rightwristx,rightwrist,20);
    if(rightwrist>0 && rightwrist<120){
        think.play();
        think.rate(1);
        think.setVolume(1);
        think.getElementById(song).innerHTML="song: time to think";
    };
    if(rightwrist>120 && rightwrist<240){
        herbaltea.play();
        herbaltea.rate(1);
        herbaltea.setVolume(1);
        herbaltea.getElementById(song).innerHTML="song: herbal tea";
    };
    if(rightwrist>240 && rightwrist<360){
        wildstrawberry.play();
        wildstrawberry.rate(1);
        wildstrawberry.setVolume(1);
        wildstrawberry.getElementById(song).innerHTML="song: wild strawberry";
    };
    if(rightwrist>360 && rightwrist<480){
        stillawake.play();
        stillawake.rate(1);
        stillawake.setVolume(1);
        stillawake.getElementById(song).innerHTML="song: still awake";
    };
    if(rightwrist>480 && rightwrist<600){
        bloom.play();
        bloom.rate(1);
        bloom.setVolume(1);
        bloom.getElementById(song).innerHTML="song: bloom";
    };
    }

}

function modelLoaded(){
    console.log("posenet is loaded :)")
}
function gotResults(results){
    if(results.length>0){
        console.log(results)  
        leftwrist=results[0].pose.leftWrist.y;
        rightwrist=results[0].pose.rightWrist.y;
        rightwristx=results[0].pose.rightWrist.x;
        leftscore=results[0].pose.keypoints[9].score;
        rightscore=results[0].pose.keypoints[10].score;
    }
}

