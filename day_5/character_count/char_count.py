# For each unique character that appears in the input string, report the number of occurrences of that character 
# in the input. You should return the resulting data as a list of lists. Each list element should be list with in the folowing format:
# The list should be sorted by the number of occurances (descending). If there is the same number of occurances for two or more characters,
#   then the order should be alphabetical. You can assume that all input will be lower case. Ignore any spaces or punctuation. 



def char_count(str):
  character_dict = {}
  for char in str.replace(" ", ""):
    if char in character_dict:
      character_dict[char] +=1
    else:
      character_dict[char] = 1
  result = [[key, value] for key, value in sorted(character_dict.items(), key= lambda dict_key:(-dict_key[1], dict_key[0]))]
  return result



print(char_count("aaabbc") == [
  ["a", 3],
  ["b", 2],
  ["c", 1]
])

print(char_count("an apple a day will keep the doctor away") == [
  ["a", 6],
  ["e", 4],
  ["l", 3],
  ["p", 3],
  ["d", 2],
  ["o", 2],
  ["t", 2],
  ["w", 2],
  ["y", 2],
  ["c", 1],
  ["h", 1],
  ["i", 1],
  ["k", 1],
  ["n", 1],
  ["r", 1]
])
