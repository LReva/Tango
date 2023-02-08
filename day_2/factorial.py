#Solution One
import math

def factorial_of_number(number):
  return math.factorial(number)

print(factorial_of_number(8))
print(factorial_of_number(18))
print(factorial_of_number(45))


# Solution Two
def another_factorial(num):
  if num < 0:
    return 'Please provide a positive integer'
  if num ==1 or num ==0:
    return 1
  elif num >1:
    return num * another_factorial(num-1)

print(another_factorial(8))
print(another_factorial(18))
print(another_factorial(45))

#Solution Three
def third_factorial(num):
  if num < 0:
    return 'Please provide a positive integer'
  result = 1
  for i in range(1, num+1):
    result *= i
  return result

print(third_factorial(8))
print(third_factorial(18))
print(third_factorial(45))