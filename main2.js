function setup(){
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objects";
    }
    
    img = "";
    status = "";
    function preload(){
    img = loadImage("https://media.istockphoto.com/photos/scandinavian-bedroom-interior-stock-photo-picture-id1264323513?k=20&m=1264323513&s=612x612&w=0&h=r9VwQ53qooD1NJp4JQgFO_LzhISWyE38OVw97AT6wvY=");
    }
    
    
    function draw(){
    image(img ,0 ,0 ,640,420);
    fill("#0000FF");
    text("bed" ,45,75);
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
    }