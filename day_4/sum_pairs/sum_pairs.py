# Write a method that takes an integer array and a desired sum. The output will be pairs of numbers from 
# the inputed integer array that equal that desired sum. If there are no pairs that work, return 'unable to find pairs'


def sum_pairs(lst, num):
  if len(lst) < 2:
    return False
  pairs_to_return = []
  n_seen = set()
  for n in lst:
    difference = num - n
    if difference in n_seen:
      pairs_to_return.append([difference, n])
    else:
      n_seen.add(n)
  return pairs_to_return if pairs_to_return else 'unable to find pairs'


print(sum_pairs([1,2,3,4,5], 9)) # [[4,5]]
print(sum_pairs([1,2,3,4,5], 7)) # [[3,4],[2,5]]
print(sum_pairs([3, 1, 5, 8, 2], 27)) # 'unable to find pairs'