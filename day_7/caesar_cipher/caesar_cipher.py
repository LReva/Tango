import string

def caesar_cipher(sen, shift_amount):
  alphabet = string.ascii_lowercase
  result = ""
  for char in sen:
    if char.isalpha():
      char_index = alphabet.index(char.lower())
      new_index = (char_index + shift_amount) %26
      if char.isupper():
        char = alphabet[new_index].upper()
      else:
        char = alphabet[new_index]
    result += char
  return result