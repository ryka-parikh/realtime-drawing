function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    //video.hide();
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    posenet = ml5.poseNet(video, model_loaded);
    posenet.on('pose', got_poses);
}

function draw(){
    background("pink"); //beige
}

function model_loaded(){
    console.log("posenet model is initialized");
}

function got_poses(results){
    if(results.length >= 0){
        console.log(results);
    }
}