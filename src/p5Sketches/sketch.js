import { random } from "gsap";
import { ballerinaFrames } from "./ballerinaFrames";

export const sketch = (p) => {
  let convertedImg = ballerinaFrames;
  let selector = 0;
  let exhausted;
  let exhaustedLight;

  let gui;
  let chars;

  let toggleGUIButton;
  let guiContainer;
  let text_input;
  let resetTextButton;
  let cleanValuesButton;
  let maxPulseButton;
  let randomValuesButton;
  let zoom_slider, pulse_slider, trail_slider, grid_slider;

  let currentZoomValue = 0; // Initialize with a default value
  let currentPulseValue = 0; // Initialize with a default value
  let currentTrailValue = 20; // Initialize with a default value
  let currentGridSize = 70; // Initialize with a default value

  let tilesX = currentGridSize;
  let tilesY = currentGridSize;
  let ts;

  p.preload = () => {
    exhausted = p.loadFont("/data/IBMPlexMono-SemiBold.otf");
    exhaustedLight = p.loadFont("/data/IBMPlexMono-Light.otf");
  };

  const calculateCanvasSize = () => {
    return Math.min(p.windowWidth, p.windowHeight, 600);
  };

  p.setup = () => {
    let canvasSize = calculateCanvasSize();
    let canvas = p.createCanvas(canvasSize, canvasSize);

    p.smooth();
    p.textFont(exhausted);
    p.frameRate(30);
    p.background(0, 255 - currentTrailValue);
    p.noStroke();
    p.textAlign(p.CENTER, p.CENTER);
    p.textFont(exhausted);

    p.createGUI();
    p.createDescription();
  };

  p.draw = () => {
    chars = text_input.value();
    currentZoomValue = zoom_slider.value();
    currentPulseValue = pulse_slider.value();
    currentTrailValue = trail_slider.value();
    currentGridSize = grid_slider.value();
    guiContainer.class(`${displayGUI ? "flex" : "hidden"} flex-col gap-2`);
    let step = Math.floor(70 / grid_slider.value()); // 70 is the default grid size
    ts = (p.width / tilesX) * step;

    p.fill(0, 255 - currentTrailValue);
    p.rect(0, 0, p.width, p.height);
    p.textSize(ts);

    p.push();

    let imgFrame = convertedImg[selector];
    let mag2 = p.width / 2;

    let rdmchar = p.map(
      Math.sin(p.radians(p.frameCount * currentPulseValue)),
      -1,
      1,
      0.01,
      1
    );

    for (let x = 0; x < tilesX; x += step) {
      for (let y = 0; y < tilesY; y += step) {
        let index = y + x * tilesY;
        let b = imgFrame[index];

        let zoomFactor = p.map(
          b,
          10,
          255,
          1 - currentZoomValue,
          1 + currentZoomValue
        );
        let xOffset_GUI = displayGUI ? p.width / 16 : 0;
        let posX =
          p.map(
            x,
            0,
            tilesX,
            -mag2 * Math.pow(zoomFactor, 2),
            mag2 * Math.pow(zoomFactor, 2)
          ) +
          p.width / 2 +
          xOffset_GUI;

        let yPulse =
          p.random(1.0) > 0.9
            ? p.noise(x * Math.pow(currentPulseValue, 2), p.frameCount * 5) *
              currentPulseValue
            : 0;
        let posY =
          p.map(
            y,
            0,
            tilesY,
            -mag2 * Math.pow(zoomFactor, 2) - yPulse,
            mag2 * Math.pow(zoomFactor, 2) + yPulse
          ) +
          p.height / 2 +
          ts / 4;

        let chSelector = (x + y + p.frameCount / 8) % chars.length;
        if (p.random(0, 1) < rdmchar && b > 10) {
          p.fill(b * 1.5 + 100);
          let ch = chars.charAt(Math.floor(chSelector));
          p.push();
          p.translate(posX, posY);
          p.scale(zoomFactor);
          p.text(ch, 0, 0);
          p.pop();
        }
      }
    }

    p.pop();

    selector++;
    selector = selector % convertedImg.length;
  };

  p.createDescription = () => {
    let description = p.createDiv();
    description.id("description");
    description.parent("canvas");
    description.class(
      "flex justify-between description absolute bottom-0 left-0 z-50 w-full text-[0.75rem] p-4 text-white"
    );

    let descriptionText_1 = p.createP("Dissolving the Spin");
    descriptionText_1.parent(description);
    descriptionText_1.class("text-[0.75rem] normal-case	");

    let descriptionText_2 = p.createP("a Creative Coding experiment");
    descriptionText_2.parent(description);
    descriptionText_2.class("text-[0.75rem] normal-case	");
  };

  let displayGUI = true;

  p.createGUI = () => {
    gui = p.createDiv();
    gui.id("gui");
    gui.parent("canvas");
    gui.class(
      " flex flex-row-reverse w-full justify-between items-start gui  absolute top-0 left-0 z-50  text-[0.8rem] p-4 "
    );

    let toggleGUIButton = p.createButton("CLOSE GUI");
    toggleGUIButton.parent(gui);
    toggleGUIButton.class(
      "toggleGUIButton hover:bg-white hover:text-black p-1"
    );
    toggleGUIButton.mousePressed(() => {
      displayGUI = !displayGUI;
      toggleGUIButton.html(displayGUI ? "CLOSE GUI" : "OPEN GUI");
    });

    guiContainer = p.createDiv();
    guiContainer.id("guiContainer");
    guiContainer.parent(gui);
    guiContainer.class(`${displayGUI ? "flex" : "hidden"} flex-col gap-2`);

    let textInputContainer = p.createDiv();
    textInputContainer.parent(guiContainer);
    textInputContainer.class("flex gap-1 items-center justify-between w-full");

    text_input = p.createInput("LETITFLOW");
    text_input.parent(textInputContainer);
    text_input.class("focus:outline-none");
    text_input.style("color", "#000");
    text_input.style("width", "100%");
    text_input.changed(() => {
      chars = text_input.value();
      resetTextButton.style("display", "block");
    });

    resetTextButton = p.createButton("Reset");
    resetTextButton.parent(textInputContainer);
    resetTextButton.style("display", "none");
    resetTextButton.mousePressed(() => {
      text_input.value("LETITFLOW");
      chars = text_input.value();
      resetTextButton.style("display", "none");
    });

    let textInputLabel = p.createP("choose your word");
    textInputLabel.parent(guiContainer);
    textInputLabel.class("text-[0.75rem] normal-case pb-2 px-1 -mt-2");

    zoom_slider = p.createSlider(0, 1, currentZoomValue, 0.05);
    zoom_slider.parent(guiContainer);
    zoom_slider.changed(() => {
      currentZoomValue = zoom_slider.value();
    });

    let zoomLabel = p.createP("Dive Control");
    zoomLabel.parent(guiContainer);
    zoomLabel.class("text-[0.75rem] normal-case pb-2 px-1 -mt-2");

    pulse_slider = p.createSlider(0, 50, currentPulseValue, 1);
    pulse_slider.parent(guiContainer);
    pulse_slider.changed(() => {
      currentPulseValue = pulse_slider.value();
    });

    let pulseLabel = p.createP("Pulse Frequency");
    pulseLabel.parent(guiContainer);
    pulseLabel.class("text-[0.75rem] normal-case pb-2 px-1 -mt-2");

    trail_slider = p.createSlider(0, 245, currentTrailValue, 1);
    trail_slider.parent(guiContainer);
    trail_slider.changed(() => {
      currentTrailValue = trail_slider.value();
    });

    let trailControlLabel = p.createP("Trail Control");
    trailControlLabel.parent(guiContainer);
    trailControlLabel.class("text-[0.75rem] normal-case pb-2 px-1 -mt-2");

    grid_slider = p.createSlider(5, 70, currentGridSize, 1);
    grid_slider.parent(guiContainer);
    grid_slider.changed(() => {
      currentGridSize = grid_slider.value();
    });

    let gridSizeLabel = p.createP("Grid Size");
    gridSizeLabel.parent(guiContainer);
    gridSizeLabel.class("text-[0.75rem] normal-case pb-2 px-1 -mt-2");

    let buttonsContainer = p.createDiv();
    buttonsContainer.parent(guiContainer);
    buttonsContainer.id("buttonsContainer");
    buttonsContainer.class("flex flex gap-2 items-center justify-between");

    cleanValuesButton = p.createButton("Clean");
    cleanValuesButton.parent(buttonsContainer);
    cleanValuesButton.class("hover:bg-white hover:text-black p-1");
    cleanValuesButton.mousePressed(() => {
      zoom_slider.value(0);
      pulse_slider.value(0);
      trail_slider.value(0);
      grid_slider.value(70);
    });

    maxPulseButton = p.createButton("PULSE");
    maxPulseButton.parent(buttonsContainer);
    maxPulseButton.class("hover:bg-white hover:text-black p-1");
    maxPulseButton.mousePressed(() => {
      pulse_slider.value(50);
    });

    randomValuesButton = p.createButton("WILD");
    randomValuesButton.parent(buttonsContainer);
    randomValuesButton.class("hover:bg-white hover:text-black p-1");
    randomValuesButton.mousePressed(() => {
      zoom_slider.value(p.random(0, 1));
      pulse_slider.value(p.random(0, 50));
      trail_slider.value(p.random(0, 245));
      grid_slider.value(p.random(3, 70));
    });
  };

  p.windowResized = () => {
    let canvasSize = calculateCanvasSize();
    p.resizeCanvas(canvasSize, canvasSize);
    ts = p.width / tilesX;
  };
};
