Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera")

function captureimage() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'>"
    });
}
console.log("Ml5 Version", ml5.version);
var classifier = ml5.imageClassifier("", model_loaded);

function model_loaded() {
    console.log("modal loaded!!");
}

function check() {
    image = document.getElementById("captured_image");
    classifier.classify(image, gotresult);
}

function gotresult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
    document.getElementById("object-name").innerHTML = results[0].label;
    document.getElementById("object-accuracy").innerHTML = results[0].confidence.toFixed(3);
}