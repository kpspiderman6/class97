var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function Start(){
    document.getElementById("input1").innerHTML="";
    recognition.start();
    
}
recognition.onresult=function(event){
    console.log(event);
    var result_1 = event.results[0][0].transcript;
    console.log(result_1);
    document.getElementById("input1").innerHTML=result_1;
    if(result_1=="take my selfie"){
        console.log("taking selfie");
        speakup();
    }
}
function speakup(){
    var speech_data = window.speechSynthesis;
    speech_data2 = "please wait takin you selfie";
    var speech_data3 = new SpeechSynthesisUtterance(speech_data2);
    speech_data.speak(speech_data3);
    Webcam.attach(camera);
}
Webcam.set({
    width : 300,
    height : 300,
    image_format: 'png',
    png_quality : 90
});
camera = document.getElementById("webcam-div");
