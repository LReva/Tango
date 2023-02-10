#Version 1
def find_armstrong_numbers(numbers):
  new_numbers = list(filter(lambda item: sum([int(i) ** len(str(item)) for i in str(item)]) == item, numbers))
  return new_numbers

#Version 2
def find_armstrong_numbers2(numbers):
  new_numbers = []
  for num in numbers:
    num_length = len(str(num))
    num_sum = 0
    for i in str(num):
      num_sum +=int(i) **num_length
      if int(num) == num_sum:
        new_numbers.append(num)
  return new_numbers

print(find_armstrong_numbers2(range(0,1000)))
