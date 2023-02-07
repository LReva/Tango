def linear_search(search_item, array):
  for i in range(0, len(array)):
    if array[i] == search_item:
      return i


print(linear_search(3, [1,2,3])) #2
print(linear_search(4, [1,2,3])) # None
print(linear_search(13, [1,2,3])) # None
print(linear_search(13, [])) # None

def linear_search_global(search_item, array):
  all_results = []
  for i in range(0, len(array)):
    if array[i] == search_item:
      all_results.append(i)
  return all_results

print(linear_search_global("a", ["b", "a", "n", "a", "n", "a", "s"])) #[1,3,5]
print(linear_search_global("s", ["b", "a", "n", "a", "n", "a", "s"])) #[6]
print(linear_search_global("n", ["b", "a", "n", "a", "n", "a", "s"])) #[2,4]
print(linear_search_global("w", ["b", "a", "n", "a", "n", "a", "s"])) #[]]