function redCyan() {
    var ctx = canvas.getContext('2d');
    var canvasData = ctx.getImageData(0, 0, width, height);
    for (var i = 0; i < canvasData.data.length; i += 4) {
        var red = canvasData.data[i];
        var cyan = (canvasData.data[i + 1] + canvasData.data[i + 2]) / 2;
        if (red > cyan) {
            canvasData.data[i] = 255;
            canvasData.data[i + 1] = 0;
            canvasData.data[i + 2] = 0;
        }
        else if (red < cyan) {
            canvasData.data[i] = 0;
            canvasData.data[i + 1] = 255;
            canvasData.data[i + 2] = 255;
        }
        else if (red <= 100) {
            canvasData.data[i] = 0;
            canvasData.data[i + 1] = 0;
            canvasData.data[i + 2] = 0;
        }
        else {
            canvasData.data[i] = 255;
            canvasData.data[i + 1] = 255;
            canvasData.data[i + 2] = 255;
        }
    }
    ctx.putImageData(canvasData, 0, 0);
}

function text(str, textColor, fontSize, top) {
    top = top || 90;
    fontSize = fontSize || 63;
    ctx.font = "500 " + fontSize + "px Arial";
    if(textColor) {
        ctx.fillStyle = textColor;
    }
    else{
        ctx.fillStyle = '#000';
        if (Math.round(Math.random() * 2) != 0) {
            ctx.fillStyle = '#ff0000';
            if (Math.round(Math.random())) {
                ctx.fillStyle = '#00ffff';
            }
        }
    }
    ctx.fillText(str, 0, top);
}

function tone() {
    toneX = 'X';
    if (Math.round(Math.random())) {
        toneX = 'Y';
    }
    toneA = Math.round(Math.random() * 90);
    toneXa = width;
    toneF = Math.round(Math.random()) + 1;
    toneP = Math.round(Math.random() * 90);
    tonePer = width / toneF;
    toneGen();
}

function toneGen() {
    if (toneX == 'X') {
        for (var i = 0; i < width; i++) {
            var t = i - toneP;
            var shift = Math.sin(t / tonePer * 3);
            if (shift > 0) {
                shift = toneA;
            }
            else if (shift < 0) {
                shift = -toneA;
            }
            else {
                shift = 0;
            }
            ctx.drawImage(ctx.canvas, i, 0, 1, height, i, shift, 1, height);
        }
    }
    else {
        for (var i = 0; i < height; i++) {
            var t = i - toneP;
            var shift = Math.sin(t / tonePer * 3);
            if (shift > 0) {
                shift = toneA;
            }
            else if (shift < 0) {
                shift = -toneA;
            }
            else {
                shift = 0;
            }
            ctx.drawImage(ctx.canvas, 0, i, width, 1, shift, i, width, 1);
        }
    }
}