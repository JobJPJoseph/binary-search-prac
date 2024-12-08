function linearSearch (arr, target) {

  // Can you solve this in one line?
  return (arr.includes(target)) ? target : -1;
};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let start = 0;
  let end = arr.length;
  // While high and low indices do not overlap...
  while (!(start > end)) {
    // Find the midpoint between high and low indices
    let mid = Math.floor((end + start) / 2);
    // Compare the target value to the midpoint value
    if (arr[mid] === target) return target;
    // If the target equals the midpoint...
      // Return the midpoint index
    if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
  }
  // Return -1 if the loop exits with overlapping pointers
  return -1;
}


module.exports = [linearSearch, binarySearch]
