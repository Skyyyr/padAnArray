def pad(array, min_size, value = None):
    """Take 3 params and determine if you can padd the array or not; then return it

    Args:
        array (array): An array of elements
        min_size (int): Padding size if it's greater than the length of the array
        value (any, optional): If padding occures padd with this value. Defaults to None.

    Returns:
        array: array that might have been padded with a value
    """

    # If the length of the array is greater than or equal to the min_size variable then we return the array
    if len(array) >= min_size:
        return array

    # Iterate to append to array with the value
    for i in range(len(array), min_size):
        array.append(value)

    # Return the padded array
    return array

print(pad([1,2,3], 3));
print(pad([1,2,3], 4, 4));
print(pad([1,2,3], 5));
print(pad(["a", "b", "c"], 10, "?"));
print(pad(["a", "b", "c"], 1, "?"));