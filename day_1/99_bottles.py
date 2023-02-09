def bottle_song(bottle_count): 
  if bottle_count < 1:
    return "Time to get more bottles!"
  song = "" 
  initial_count = bottle_count
  while bottle_count > 1:
    song += f"{bottle_count} bottles of beer on the wall, {bottle_count} bottles of beer.\n"
    bottle_count -=1
    if bottle_count > 1:
      song +=f"Take one down and pass it around, {bottle_count} bottles of beer on the wall.\n"
    else:
      song +=f"Take one down and pass it around, {bottle_count} bottle of beer on the wall.\n"
  if initial_count > 1:
    initial_count = str(initial_count) + " bottles"
  else:
    initial_count = "1 bottle"
  song += f"""1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, {initial_count} of beer on the wall."""
  return song

print(bottle_song(int(input("Please provide the amount of bottles you have.\n"))))