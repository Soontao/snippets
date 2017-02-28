
const arr = [1, 4, 5, 10, 33, 244, 9999];

const binary_search = (arr = [], des) => {
  let low = 0;
  let high = arr.length - 1;

  while (true) {
    if (high > arr.length - 1 && low > high) break;
    let middle = (high + low) >> 1;
    // if middle value equal to destination
    if (des == arr[middle]) return middle;
    else if (des < arr[middle]) high = middle - 1;
    else low = middle + 1;
  }

  return -1;
}

console.log(binary_search(arr, arr[3]))
