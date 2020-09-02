const arr = [];
let rectW = 50;
let spacin = (600 - 10 * 50) / 2;
let offset = 10;
let searchedVal;
let mid;

function setup() {
  createCanvas(600, 200);
  input = createInput();
  input.size(60);
  input.position(5, height + 1);

  button = createButton("search");
  button.position(input.x + input.width, input.y);
  button.mousePressed(search);

  let set = new Set();

  let i = 0;
  while (i != 10) {
    let randVal = floor(random(20));
    if (!set.has(randVal)) {
      arr[i] = randVal;
      i++;
    }
    set.add(randVal);
  }
  arr.sort(function (a, b) {
    return a - b;
  });
}

async function search() {
  loop();
  searchedVal = input.value();
  let inx = await binarySearch(arr, 0, arr.length - 1, searchedVal);
  noLoop();
  let msg;
  if (inx == -1) {
    msg = searchedVal + " is not exist in the array";
  } else {
    msg = "The value " + searchedVal + " is found at index " + inx;
  }
  await sleep(10);
  textSize(20);
  fill(0);
  strokeWeight(2);
  text(msg + ".", width / 2, 70);
  textAlign(CENTER);
}

async function binarySearch(arr, start, end, x) {
  mid = floor((start + end) / 2);
  await sleep(1000);
  if (start <= end) {
    if (x == arr[mid]) return await mid;
    else if (x > arr[mid]) return await binarySearch(arr, mid + 1, end, x);
    else if (x < arr[mid]) return await binarySearch(arr, start, mid - 1, x);
  } else {
    mid = -1;
    return -1;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function draw() {
  background("#ffd2a6");

  for (let i = 0; i < 10; i++) {
    if (i == mid) {
      fill("#7FFFBF");
    } else {
      fill(255);
    }
    rect(i * rectW + spacin, height / 2, rectW, rectW);
    textSize(rectW * 0.4);
    fill(0);
    strokeWeight(1);
    text(arr[i], i * rectW + (3 * rectW) / 2, height / 2 + rectW / 2);
    textAlign(CENTER);
  }
}
