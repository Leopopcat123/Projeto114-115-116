noseX = 0;
noseY = 0;


function preload()
{
  bigode = loadImage("https://i.postimg.cc/1Xyydn3R/bigode.png");
}


function setup()
{
  canvas = createCanvas(300,300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();


  poseNet = ml5.poseNet(video, modelLoad);
  poseNet.on('pose', gotPoses);
}


function draw()
{
  image(video,0,0,300,300);
  image(bigode, noseX, noseY, 80, 35);
}


function takeSnapshot()
{
  save("foto.png");
}


function modelLoad()
{
  console.log("poseNet inicializado");
}


function gotPoses(results)
{
  if(results.length > 0)
    {
      console.log(results);
      console.log("nose X = " + results[0].pose.nose.x);
      console.log("nose Y = " + results[0].pose.nose.y);
      noseX = results[0].pose.nose.x-40;
      noseY = results[0].pose.nose.y;
    }
}


