import re

def grandma():
  count_goodbye = 0
  print("HEY KID!")
  while count_goodbye < 2:
    you_talk = input(">")
    if you_talk == "GOODBYE!" and count_goodbye == 0:
      print ("LEAVING SO SOON?")
      count_goodbye += 1
    elif you_talk == "GOODBYE!" and count_goodbye > 0:
      print("LATER, SKATER!")
      count_goodbye += 1
    elif len(you_talk) == 0:
      print ("WHAT?")
    elif re.findall('[a-z]', you_talk):
      print ("SPEAK UP, KID!")
    elif re.findall('[A-Z]', you_talk):
      print ("NO, NOT SINCE 1946!")

grandma()