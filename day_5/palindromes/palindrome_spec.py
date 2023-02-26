from palindrome import palindrome, palindrome_re, palindrome_recursive, palindrome_recursive_simplified, palindrome_with_filter

print(palindrome('racecar') == True)
print(palindrome('Noon') == True)
print(palindrome('ciVic') == True)
print(palindrome('nice')== False)
print(palindrome(434) == True)
print(palindrome(123) == False)
print(palindrome('bomb') == False)

print("The following should be True if you're trying to do the extra portion of this challenge")
print(palindrome('Sore was I ere I saw Eros.') == True)
print(palindrome('A man, a plan, a canal -- Panama') == True)



print(palindrome_re('racecar') == True)
print(palindrome_re('Noon') == True)
print(palindrome_re('ciVic') == True)
print(palindrome_re('nice')== False)
print(palindrome_re(434) == True)
print(palindrome_re(123) == False)
print(palindrome_re('bomb') == False)

print("The following should be True if you're trying to do the extra portion of this challenge")
print(palindrome_re('Sore was I ere I saw Eros.') == True)
print(palindrome_re('A man, a plan, a canal -- Panama') == True)



print(palindrome_recursive('racecar') == True)
print(palindrome_recursive('Noon') == True)
print(palindrome_recursive('ciVic') == True)
print(palindrome_recursive('nice')== False)
print(palindrome_recursive(434) == True)
print(palindrome_recursive(123) == False)
print(palindrome_recursive('bomb') == False)

print("The following should be True if you're trying to do the extra portion of this challenge")
print(palindrome_recursive('Sore was I ere I saw Eros.') == True)
print(palindrome_recursive('A man, a plan, a canal -- Panama') == True)


print(palindrome_recursive_simplified('racecar') == True)
print(palindrome_recursive_simplified('Noon') == True)
print(palindrome_recursive_simplified('ciVic') == True)
print(palindrome_recursive_simplified('nice')== False)
print(palindrome_recursive_simplified(434) == True)
print(palindrome_recursive_simplified(123) == False)
print(palindrome_recursive_simplified('bomb') == False)

print("The following should be True if you're trying to do the extra portion of this challenge")
print(palindrome_recursive_simplified('Sore was I ere I saw Eros.') == True)
print(palindrome_recursive_simplified('A man, a plan, a canal -- Panama') == True)



print(palindrome_with_filter('racecar') == True)
print(palindrome_with_filter('Noon') == True)
print(palindrome_with_filter('ciVic') == True)
print(palindrome_with_filter('nice')== False)
print(palindrome_with_filter(434) == True)
print(palindrome_with_filter(123) == False)
print(palindrome_with_filter('bomb') == False)

print("The following should be True if you're trying to do the extra portion of this challenge")
print(palindrome_with_filter('Sore was I ere I saw Eros.') == True)
print(palindrome_with_filter('A man, a plan, a canal -- Panama') == True)

