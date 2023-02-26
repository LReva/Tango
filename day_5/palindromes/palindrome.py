# detect if a word/sentence is a Palindrome


def palindrome(word):
    word = "".join([letter for letter in str(word).lower() if letter.isalnum()])
    return word == word[::-1]

# #solution with regex and reversed()
import re

def palindrome_re(word):
    word = re.sub('[^a-zA-Z0-9]', "", str(word)).lower()
    reversed_word = "".join([char for char in reversed(word)])
    return word == reversed_word

# solution eith filter
def palindrome_with_filter(word):
    word = str(word).lower()
    word = "".join(filter(lambda x: x.isalnum(), word))
    new_word = str(word)[::-1]
    return new_word == word

# solution with with recursion 1
def palindrome_recursive(word):
    word = "".join([letter for letter in str(word).lower() if letter.isalnum()])
    word_length = len(word)-1
    if word[0] != word[word_length]:
        return False
    if word_length > 1:
        return palindrome(word[1:word_length])
    else:
        return True

#solution with with recursion simplified    
def palindrome_recursive_simplified(word):
  word = "".join([letter for letter in str(word).lower() if letter.isalnum()])
  return True if len(word) < 2 else word[0] == word[-1] and palindrome(word[1:-1])