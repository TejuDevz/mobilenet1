Webcam.set({
    width: 310,
    height: 300,
    image_format: 'png',
    png_quality: 100,
    constraints: {
        facingMode: "environment"
    }
});

var camera = document.getElementById('camera');

Webcam.attach(camera);

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById('result').innerHTML = `<img src="${data_uri}" id="captured_image">`;
    });
}

console.log('ml5 version: ',ml5.version);
var classfier = ml5.imageClassifier('MobileNet', modelLoaded);
function modelLoaded() {
    console.log('Model Loaded');
}

function check() {
    var img = document.getElementById('captured_image');
    classfier.classify(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById('result_name').innerHTML = results[0].label;
    }
}
