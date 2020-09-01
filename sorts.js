let curr1;

async function bubbleSort() {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (startflag == false) return;
      await sleep(70);
      if (arr[j] > arr[j + 1]) {
        await swap(arr, j, j + 1);
      }
    }
  }
}

async function selectionSort() {
  for (i = 0; i < arr.length; i++) {
    maxIndex = 0;
    for (j = 1; j < arr.length - i; j++) {
      if (startflag == false) return;
      await sleep(90);
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    await swap(arr, arr.length - 1 - i, maxIndex);
  }
}

async function mergesort(arr, start, end) {
  if (end > start) {
    let mid = floor((start + end) / 2);

    await mergesort(arr, start, mid);
    await mergesort(arr, mid + 1, end);

    await merge(arr, start, mid, end);
  }
}

async function merge(arr, start, mid, end) {
  //[l,...,m,m+1,...,r]
  if (startflag == false) return;
  curr1 = start;
  let n1 = mid - start + 1;
  let n2 = end - mid;
  let L = [];
  let R = [];
  for (let i = 0; i < n1; i++) L[i] = arr[start + i];
  for (let j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];

  let i = 0;
  let j = 0;
  while (i < n1 && j < n2) {
    await sleep(50);
    curr1 = start;
    if (L[i] > R[j]) {
      arr[start] = R[j];
      j++;
    } else {
      arr[start] = L[i];
      i++;
    }
    start++;
  }

  while (i < n1) {
    await sleep(50);
    curr1 = start;
    arr[start] = L[i];
    i++;
    start++;
  }

  while (j < n2) {
    await sleep(50);
    curr1 = start;
    arr[start] = R[j];
    j++;
    start++;
  }
  curr1 = -1;
}

async function quickSort(arr, start, end) {
  if (start < end) {
    await sleep(35);
    let pivIndex = await partition(arr, start, end);
    await quickSort(arr, start, pivIndex);
    await quickSort(arr, pivIndex + 1, end);
    i = -1;
    j = -1;
  }
}

async function partition(arr, start, end) {
  maiden = floor((start + end) / 2);
  pivotVal = arr[maiden];
  i = start - 1;
  j = end + 1;
  while (true) {
    if (startflag == false) return;
    do {
      i++;
    } while (arr[i] < pivotVal);

    do {
      j--;
    } while (arr[j] > pivotVal);

    if (i >= j) {
      return j;
    }

    await swap(arr, i, j);
  }
}

async function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  await sleep(35);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
