import { ballerinaFrames } from "./ballerinaFrames";

export const sketch = (
  p,
  { inputValue, zoomValue, pulseValue, trailValue }
) => {
  let tilesX = 70;
  let tilesY = 70;
  let ts = 400 / tilesX;
  let convertedImg = ballerinaFrames;
  let selector = 0;
  let exhausted;
  let exhaustedLight;
  let chars;

  p.preload = () => {
    exhausted = p.loadFont("/data/IBMPlexMono-SemiBold.otf");
    exhaustedLight = p.loadFont("/data/IBMPlexMono-Light.otf");

    // for (let i = 0; i < 115; i++) {
    //   imgs[i] = p.loadImage(
    //     `/data/${i}.jpg`,
    //     (img) => {
    //       convertedImg.push(imageToBrArray(img));
    //     },
    //     (error) => {
    //       console.error("Error loading image:", error);
    //     }
    //   );
    // }
  };

  p.setup = () => {
    let canvasSize = Math.min(p.windowWidth, p.windowHeight, 400);
    let canvas = p.createCanvas(canvasSize, canvasSize, p.WEBGL);

    // canvas.context.willReadFrequently = true;
    ts = p.width / tilesX;
    p.smooth();
    p.textFont(exhausted);
    p.frameRate(30);
    p.background(0);
    p.noStroke();
    p.textAlign(p.CENTER, p.CENTER);
    p.textFont(exhausted);
    p.textSize(ts);
  };

  p.draw = () => {
    chars = inputValue;

    p.fill(0, 255 - trailValue);
    p.rect(-p.width / 2, -p.height / 2, p.width, p.height);

    if (p.frameCount % 1 === 0) {
      let imgFrame = convertedImg[selector];

      let mag2 = p.width / 2;

      let spread = zoomValue;
      let rdmchar = p.map(
        p.sin(p.radians(p.frameCount * pulseValue)),
        -1,
        1,
        0.1,
        1
      );

      p.push();
      p.translate(p.width / 2, p.height / 2);
      for (let x = 0; x < tilesX; x++) {
        for (let y = 0; y < tilesY; y++) {
          let index = y + x * tilesY;
          let b = imgFrame[index];
          let s = p.map(b, 255, 0, 0, (mag2 * 2) / tilesX);

          let posX = p.map(x, 0, tilesX, -mag2 * 1, mag2 * 1);
          let posY = p.map(y, 0, tilesY, -mag2 * 1, mag2 * 1);
          let posZ = p.map(b, 255, 0, -spread, spread);

          let chSelector = (x + y + p.frameCount / 8) % chars.length;
          if (p.random(0, 1) < rdmchar && b > 10) {
            p.fill(b * 2);
            let ch = chars.charAt(Math.floor(chSelector));
            p.push();
            p.translate(posX - p.width / 2, posY - p.width / 2, posZ);
            p.text(ch, 0, s);
            p.pop();
          }
        }
      }
      p.pop();
      selector++;
      selector = selector % convertedImg.length;
    }
  };

  // function imageToBrArray(img) {
  //   let convertedImg = [];

  //   // Create an offscreen canvas
  //   let offscreenCanvas = document.createElement("canvas");
  //   offscreenCanvas.width = tilesX;
  //   offscreenCanvas.height = tilesY;

  //   // Get the 2D context with 'willReadFrequently' set to true
  //   let ctx = offscreenCanvas.getContext("2d", { willReadFrequently: true });

  //   // Draw the image on the offscreen canvas
  //   ctx.drawImage(img.canvas, 0, 0, tilesX, tilesY);

  //   // Get the image data from the offscreen canvas
  //   let imgData = ctx.getImageData(0, 0, tilesX, tilesY);

  //   // Process the image data to calculate brightness values
  //   for (let y = 0; y < imgData.height; y++) {
  //     for (let x = 0; x < imgData.width; x++) {
  //       let index = (x * imgData.height + y) * 4;
  //       let r = imgData.data[index];
  //       let g = imgData.data[index + 1];
  //       let b = imgData.data[index + 2];

  //       // Calculate the brightness value
  //       let brightness = (r + g + b) / 3;
  //       convertedImg.push(brightness);
  //     }
  //   }

  //   return convertedImg;
  // }
};
