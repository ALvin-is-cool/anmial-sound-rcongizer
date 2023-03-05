function identify() {

    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/do8d99hcN/model.json', modelReady);


}

function modelReady() {

    classifier.classify(gotresults);


}

function gotresults(error, results) {
    console.log(results);
    if (results[0].label == "barking") {
        document.getElementById("photo").src = "https://cdn.britannica.com/41/233841-050-4FFECCF1/Pomeranian-dog.jpg";
    }
    else if (results[0].label == "mooo") {
        document.getElementById("photo").src = "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg";
    }
    else if (results[0].label == "meow ing") {
        document.getElementById("photo").src = "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg";
    }
    else if (results[0].label == "roar") {
        document.getElementById("photo").src = "https://m.media-amazon.com/images/M/MV5BMTMyNjg0MzQwM15BMl5BanBnXkFtZTcwMTU2NTI3Ng@@._V1_.jpg";
    }
    else if(results.label == "backround noise"){ document.getElementById("photo").src = ""; }
    document.getElementById("object").innerHTML=results[0].label;
    document.getElementById("accuracy").innerHTML=Math.round(results[0].confidence*100)+"%";
}









