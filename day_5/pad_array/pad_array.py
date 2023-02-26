# In this challenge, you'll want to write a method `pad`. It will accept a list, a minimum size (non-negative integer) 
# for the list, and an optional argument of what the list should be "padded" with (see the example with "apple" below).

# If the list's length is less than the minimum size, `pad` should return a new list padded with the pad value up to the minimum size.


def pad(array, min_size, value = None):
    if min_size <=len(array):
        return array
    add_times = min_size - len(array) 
    for i in range(1, add_times +1):
        array.append(value)
    return array


print(pad([1,2,3], 5) == [1,2,3, None, None])
print(pad([1,2,3],5, 'apple') == [1,2,3, 'apple', 'apple'])
print(pad([1,2,3], 3) == [1,2,3])