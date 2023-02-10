# Part 1
def is_character_match(string1, string2):
	string1_dict = {}
	for char in string1.replace(" ", "").lower():
		if char in string1_dict:
			string1_dict[char] += 1
		else:
			string1_dict[char] = 1
	for char in string2.replace(" ", "").lower():
		if char not in string1_dict:
			return False
		else:
			if string1_dict[char] > 0:
				string1_dict[char] -= 1
			else:
				return False
	return True

# Part 2
def anagrams_for(word, list_of_words):
	list_to_return = []
	for word2 in list_of_words:
		if is_character_match(word, word2):
			list_to_return.append(word2)
	return list_to_return
