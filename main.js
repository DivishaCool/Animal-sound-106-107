function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HTJPMfKlY/model.json' , modelReady);

}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error);
    }
    else {
        console.log("Got Results");
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("animal_name").innerHTML= "I can hear -"+results[0].label;
        document.getElementById("result_confidence").innerHTML= "Accuracy - "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("animal_name").style.color="rgb("+random_number_r + ","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r + ","+random_number_g+","+random_number_b+")";
        
        img = document.getElementById("image");

        if(results[0].label == "cat"){
        
            img.src = 'cat.jpg';
        
        }
        else if (results[0].label=="dog"){
        
            img.src = 'dog.jpg';
        
        
        }

        else{
        
                img.src = 'Ear.jpg';
        }
    }
  
 
}