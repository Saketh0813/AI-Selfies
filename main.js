var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();


function Start(){
    recognition.start();
    
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("voiceinput").innerHTML = content;
    if(content == "take my selfie"){
        console.log("selife");
        speak();
        
    }

        function speak(){

    
            var synth = window.speechSynthesis;
            Webcam.attach(camera);
        
            setTimeout(function(){
                img_id = "selfie1";
                speak_data = "Taking your selfie in 5 seconds";
                var utterThis =  new SpeechSynthesisUtterance(speak_data);
                synth.speak(utterThis);
                take_snapshot();
                save();
        
            },5000);

            setTimeout(function(){
                img_id = "selfie2";
                speak_data = "Taking your next selfie in 5 seconds";
                var utterThis =  new SpeechSynthesisUtterance(speak_data);
                synth.speak(utterThis);
                take_snapshot();
                save();
        
            },10000);
        
            setTimeout(function(){
                img_id = "selfie3";
                take_snapshot();
                save();
        
            },15000);
        


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'png',
    png_quality:90
});



}

function take_snapshot()
{
   console.log(img_id);

   Webcam.snap(function(data_uri){
       if(img_id == "selfie1"){
           document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
       }
       if(img_id == "selfie2"){
        document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
   }
        if(img_id == "selfie3"){
        document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
}
   });
}


}

function save(){
    link = document.getElementById("");
    image = document.getElementById("my_snapshot").src;
    link.href = img_id;
    link.click();
}
