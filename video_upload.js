function uploadVideo() {
    var videoFile = document.getElementById("videoFile").files[0];
    
    if (videoFile) {
        var videoURL = URL.createObjectURL(videoFile);
        var videoContainer = document.getElementById("videoContainer");

        var videoElement = document.createElement("video");
        videoElement.src = videoURL;
        videoElement.controls = true;
        videoElement.classList.add("uploaded-video");

        videoContainer.appendChild(videoElement);
    } else {
        alert("Please choose video file.");
    }
}
