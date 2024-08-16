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

  let currentZoomValue = zoomValue;
  let currentPulseValue = pulseValue;
  let currentTrailValue = trailValue;

  p.preload = () => {
    exhausted = p.loadFont("/data/IBMPlexMono-SemiBold.otf");
    exhaustedLight = p.loadFont("/data/IBMPlexMono-Light.otf");
  };

  const calculateCanvasSize = () => {
    return Math.min(p.windowWidth * (10 / 12), p.windowHeight * (10 / 12), 600);
  };

  p.setup = () => {
    let canvasSize = calculateCanvasSize();
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
    p.textSize(ts);

    p.fill(0, 255 - currentTrailValue);
    p.rect(-p.width / 2, -p.height / 2, p.width, p.height);

    if (p.frameCount % 1 === 0) {
      let imgFrame = convertedImg[selector];

      let mag2 = p.width / 2;

      let spread = currentZoomValue;
      let rdmchar = p.map(
        p.sin(p.radians(p.frameCount * currentPulseValue)),
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

  p.changeHandler = (newZoomValue, newPulseValue, newTrailValue) => {
    currentZoomValue = newZoomValue;
    currentPulseValue = newPulseValue;
    currentTrailValue = newTrailValue;
  };

  // Function to handle window resizing
  p.windowResized = () => {
    let canvasSize = calculateCanvasSize();
    p.resizeCanvas(canvasSize, canvasSize);
    ts = p.width / tilesX;
  };
};
