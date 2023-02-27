# Stock Picker

# For this challenge you need to implement a method `#stock_picker` that takes in a list of stock prices, one for each hypothetical day.
# It should return a pair of days representing the best day to buy and the best day to sell. Days start at 0.

# Considerations

# * You need to buy before you can sell
# * Pay attention to edge cases like when the lowest day is the last day or the highest day is the first day.


def picker(numbers):
    max_num = 0
    for i in range(0, len(numbers)):
        for j in range(i+1, len(numbers)):
            answer = numbers[j] - numbers[i]
            if answer > max_num:
                max_num = answer
                max_arr = [i,j]
    return max_arr

print(picker([17,3,6,9,15,8,6,1,10]) == [1,4])
print(picker([3,17,6,9,18,15,6,1,10]) == [0,4])
print(picker([1,17,6,9,8,15,6,3,19]) == [0,8])
print(picker([19,17,6,9,8,15,6,3,1]) == [2,5])