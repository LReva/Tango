#Version 1

def bubble_sort(seq):
  swaps = 0
  n = 1
  iteration = 1
  while n < len(seq):
    if seq[n] < seq[n-1]:
      temp = seq[n]
      seq[n] = seq[n-1]
      seq[n-1] = temp
      swaps +=1
      n  = 1
    else:
      n +=1
    iteration +=1
  print(f"Final result: {seq}")
  print(f"Swaps: {swaps}")
  return iteration


print(bubble_sort([4, 3, 5, 0, 1]))
print(bubble_sort([4, 8, 3, 5, 0, 1, 7, 23, 6]))
print(bubble_sort([4, 8, 3, 5, 0, 1, 7, 18, 23, 6, 7, 15]))
print(bubble_sort(list(range(999,0,-1))))

# Version 2

def bubble_sort_mod(seq):
  swaps = 0
  n = 1
  iteration =1
  swap_made = True
  passes = 0
  while swap_made:
    swap_counter = 0
    for n in range (1, len(seq)):
      if seq[n] < seq[n-1]:
        temp = seq[n]
        seq[n] = seq[n-1]
        seq[n-1] = temp
        swaps +=1
        swap_counter +=1
        iteration +=1
    if swap_counter == 0:
      swap_made = False  
      print(f"Final result: {seq}")
      print(f"Swaps: {swaps}")
      return passes
    passes+=1
    iteration +=1


print(bubble_sort_mod([4, 3, 5, 0, 1]))
print(bubble_sort_mod([4, 8, 3, 5, 0, 1, 7, 23, 6]))
print(bubble_sort_mod([4, 8, 3, 5, 0, 1, 7, 18, 23, 6, 7, 15]))
print(bubble_sort_mod([15,14,13,10,9,8,7,6,5]))
print(bubble_sort_mod(list(range(999,0,-1))))

# Version 3

def bubble_sort_enhanced(seq):
  swaps = 0
  n = 1
  iteration =1
  swap_made = True
  lata_len = len(seq) - 1
  swap_counter = 0
  passes = 0
  while swap_made:
    if seq[n] < seq[n-1]:
      temp = seq[n]
      seq[n] = seq[n-1]
      seq[n-1] = temp
      swaps +=1
      swap_counter +=1
      iteration +=1
    elif  n == lata_len and swap_counter == 0:
      swap_made = False
    elif n < lata_len:
      n+=1
    else:
      passes +=1
      n = 1
      swap_counter = 0
  print(f"Final result: {seq}")
  print(f"Swaps: {swaps}")
  return passes


print(bubble_sort_enhanced([4, 3, 5, 0, 1]))
print(bubble_sort_enhanced([4, 8, 3, 5, 0, 1, 7, 23, 6]))
print(bubble_sort_enhanced([4, 8, 3, 5, 0, 1, 7, 18, 23, 6, 7, 15]))
print(bubble_sort_enhanced([15,14,13,10,9,8,7,6,5]))
print(bubble_sort_enhanced(list(range(999,0,-1))))