nosex=0;
nosey=0;

function preload() {
    clown_nose=loadImage("https://i.postimg.cc/ZRXrbfGN/download-1-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.position(625,200);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, nosex, nosey, 40, 30);
}

function take_snapshot(){
    save('myFilterImage.png')
}

