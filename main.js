Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90

});
camera=document.getElementById("camera");

 Webcam.attach(camera);
 function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src="+data_uri+" id='selfie'>";
    });
 }
 function modelLoaded(){
    console.log("Model is loaded.")
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/HHQPxy5Hx/model.json",modelLoaded)

var prediction1="";
function speak(){
    var synth=window.speechSynthesis;
    speakdata="The first prediction is" +prediction1;
    var utterthis=new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
}
function check(){
    img =document.getElementById("selfie");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
document.getElementById("hand_gesture1").innerHTML=results[0].label;
if(results[0].label=="Amazing"){
    document.getElementById("hand1").innerHTML="&#128076;";
}
if(results[0].label=="Best"){
    document.getElementById("hand1").innerHTML="&#128077;";
}
if(results[0].label=="Victory"){
    document.getElementById("hand1").innerHTML="&#9996;";
}


    }
}