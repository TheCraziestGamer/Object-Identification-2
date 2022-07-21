function setup(){
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objects";
    }
    
    img = "";
    status = "";
    function preload(){
    img = loadImage("https://assets.architecturaldigest.in/photos/60ab3a15b872edd1c5ce586f/4:3/w_1000,h_750,c_limit/7%20things%20to%20consider%20when%20designing%20a%20modular%20kitchen%202.jpeg")
    
    
    
    function draw(){
    image(img ,0 ,0 ,640,420);
    fill("#0000FF");
    text("kitchen" ,45,75);
    noFill();
    stroke("#0000FF");
    rect(30,60,450,350);
    }
    function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img,gotResult);
    }
    
    function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}}