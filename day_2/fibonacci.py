def fibonacci (number):
  if number < 1:
    return "Please provide an ordinal number"
  fibonacci_object = {
    1:0,
    2:1,
    3:1,
  }
  if number in fibonacci_object:
    return fibonacci_object[number]
  else:
    for i in range(4, number +1):
      fibonacci_object[i] = fibonacci_object[i-1]+fibonacci_object[i-2]
  return fibonacci_object[number]

print(fibonacci(7))