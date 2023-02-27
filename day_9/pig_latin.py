# # Pig Latin

# You're going to implement a pig latin word and phrase converter program. Your code should accept a string as a parameter and return the string
# 'pig latin-ified'

# # Context
# Pig Latin is a made-up children's language that's intended to be confusing. It obeys a few simple rules (below) but when it's spoken quickly it's 
# really difficult for non-children (and non-native speakers) to understand.

# Rule 1: If a word begins with a vowel sound, add an "ay" sound to the end of the word.

# Rule 2: If a word begins with a consonant sound, move it to the end of the word, and then add an "ay" sound to the end of the word.


def translate(word_or_phrase):
    word_or_phrase = word_or_phrase.split(" ")
    vowels="euioaEUIOA"
    vowels_2="eioaEIOA"
    translation = []
    for i in range(len(word_or_phrase)):
        punctuation=""
        if word_or_phrase[i][-1].isalpha() == False:
            punctuation = word_or_phrase[i][-1]
            word_or_phrase[i] = word_or_phrase[i].replace(punctuation,"")
        if word_or_phrase[i][0] in vowels:
            translation.append(word_or_phrase[i] + "ay" + punctuation)
        else:
            j= 0
            first_letters_old = ""
            while word_or_phrase[i][j] not in vowels_2:            
                first_letters_old +=word_or_phrase[i][j]
                j+=1
            if word_or_phrase[i][0].isupper():
              first_letter = word_or_phrase[i][j].upper()
            else:
              first_letter = word_or_phrase[i][j]
            translation.append(first_letter + word_or_phrase[i][j+1:] + first_letters_old.lower() +"ay" + punctuation)
    return " ".join(translation)

print(f"translates a word beginning with a vowel: {translate('apple,') == 'appleay,'}")
print(f"translates a word beginning with a consonant: {translate('banana') == 'ananabay'}")
print(f"translates a word beginning with two consonants: {translate('cherry') == 'errychay'}")
print(f"translates two words: {translate('eat pie') == 'eatay iepay'}")
print(f"translates a word beginning with three consonants: {translate('three') == 'eethray'}")
print(f"counts 'sch' as a single phoneme: {translate('school') == 'oolschay'}")
print(f"counts 'qu' as a single phoneme: {translate('quiet') == 'ietquay'}")
print(f"counts 'qu' as a consonant even when it's preceded by a consonant: {translate('square') == 'aresquay'}")
print(f"translates many words: {translate('the quick brown fox') == 'ethay ickquay ownbray oxfay'}")
print(f"translates many words: {translate('One, brown fox') == 'Oneay, ownbray oxfay'}")