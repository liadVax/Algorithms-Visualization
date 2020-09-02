let arr = [];
let rectW;
let rectW_new;
let i = 0;
let j = 0;
let maxIndex;
startflag = false;

function setup() {
  createCanvas(windowWidth, windowHeight / 3);
  uiSetup();
  randomArray();
}

function uiSetup() {
  sel = createSelect();
  sel.position(5, height + 10);
  sel.option("Bubble sort");
  sel.option("Selection sort");
  sel.option("Mergesort");
  sel.option("Quicksort (hoare)");
  sel.changed(() => {
    randomArray();
  });

  Start_btn = createButton("Start");
  Start_btn.position(width / 2, height + 10);
  Start_btn.mousePressed(startFunc);

  Random_btn = createButton("Random Array");
  Random_btn.position(Start_btn.x - Random_btn.width - 10, height + 10);
  Random_btn.mousePressed(randomArray);

  Stop_btn = createButton("Stop");
  Stop_btn.position(Start_btn.width + Start_btn.x + 10, height + 10);
  Stop_btn.mousePressed(stopFunc);

  Slider = createSlider(10, 80, 40, 10);
  Slider.position(width - Slider.width - 5, height + 10);
  rectW = 90 - Slider.value();
  rectW_new = Slider.value();
}

function stopFunc() {
  i = 0;
  j = 0;
  curr1 = 0;
  maxIndex = 0;
  startflag = false;
  Start_btn.removeAttribute("disabled");
  Stop_btn.attribute("disabled", "");
}

function startFunc() {
  startflag = true;
  Start_btn.attribute("disabled", "");
  Stop_btn.removeAttribute("disabled");
  switch (sel.value()) {
    case "Bubble sort":
      bubbleSort();
      break;
    case "Selection sort":
      selectionSort();
      break;

    case "Mergesort":
      mergesort(arr, 0, arr.length - 1);
      break;

    case "Quicksort (hoare)":
      quickSort(arr, 0, arr.length - 1);
      break;
  }
}

function randomArray() {
  stopFunc();
  arr = new Array(floor(width / rectW));
  let val;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = floor(random(15, height));
  }
}

function draw() {
  rectW_new = 90 - Slider.value();
  if (rectW != rectW_new) {
    rectW = rectW_new;
    randomArray();
  }

  background(0);
  for (let inx = 0; inx < arr.length; inx++) {
    if (startflag == false) {
      fill(255);
    } else {
      switch (sel.value()) {
        case "Bubble sort":
          if (inx == j || inx == j + 1)
            //if not j or j+1 fill white
            fill("#5496ff");
          //if its j and j+1 fill blue
          else fill(255);
          break;

        case "Selection sort":
          if (inx == j) {
            fill("#5496ff");
          } else if (inx == maxIndex) {
            fill("#FF7a6e");
          } else {
            fill(255);
          }
          break;

        case "Mergesort":
          if (inx == curr1) {
            fill("#5496ff");
          } else {
            fill(255);
          }
          break;

        case "Quicksort (hoare)":
          if (inx == i || inx == j) {
            fill("#5496ff");
          } else {
            fill(255);
          }
          break;
      }
    }
    rect(inx * rectW, height - arr[inx], rectW, arr[inx]);
    if (rectW >= 40) {
      textSize(12);
      fill(0);
      stroke(1);
      text(arr[inx], inx * rectW + rectW / 2 - 10, height - arr[inx] + 14);
    }
    if (i >= arr.length) {
      stopFunc();
    }
  }
}
