
/**
 * 
 * @param {array} array A given array that may need padding before being returned
 * @param {int} minSize The minimum size of the array, if the value is equal to or less than the array length then the array is returned
 * @param {any} value An optional variable; If the minSize variable is greater than the array length then add this value to the array to 'pad' the array
 * @returns Padded array
 */
function pad(array, minSize, value = null) {
    // If the array length is greater than or equal to the minimum size then we immidiately return the array
    if (array.length >= minSize) { return array }

    // Before we add padded elements to the array we need to assign "None" if the optional variable 'value' was left blank
    if (value == null) { value = "None" }

    // Iteratively looping starting from the end of the array
    for (let i = array.length; i < minSize; i++) {
        // Add the variable 'value'
        array[i] = value;
    }

    // Return the padded array
    return array
}

console.log(pad([1,2,3], 3));
console.log(pad([1,2,3], 4, 4));
console.log(pad([1,2,3], 5));
console.log(pad(["a", "b", "c"], 10, "?"));
console.log(pad(["a", "b", "c"], 1, "?"));