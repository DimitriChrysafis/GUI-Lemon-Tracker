function outlineOrangePixels() {
    let input = document.getElementById("videoInput");
    let video = document.createElement("video");
    video.setAttribute("src", URL.createObjectURL(input.files[0]));
    video.setAttribute("autoplay", "");
    video.setAttribute("loop", "");

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    video.addEventListener("loadedmetadata", function() {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
    });

    video.addEventListener("timeupdate", function() {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let data = imageData.data;

        let orangePoints = [];

        for (let i = 0; i < data.length; i += 4) {
            let r = data[i];
            let g = data[i + 1];
            let b = data[i + 2];
            let a = data[i + 3];

            if (r > 150 && r < 300 && g > 40 && g < 200 && b < 100) {
                let x = (i / 4) % canvas.width;
                let y = Math.floor((i / 4) / canvas.width);
                orangePoints.push({x: x, y: y});
            }
        }


        let avgX = 0, avgY = 0;
        for (let i = 0; i < orangePoints.length; i++) {
            avgX += orangePoints[i].x;
            avgY += orangePoints[i].y;
        }
        avgX /= orangePoints.length;
        avgY /= orangePoints.length;


        ctx.beginPath();
        ctx.arc(avgX, avgY, 30, 0, 2 * Math.PI);
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.closePath();
    });
}
