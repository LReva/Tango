from random import randint


class GuessingGame():
  def __init__(self, answer):
    self.answer= answer
    self.result = None


  def guess(self, user_guess):
    if user_guess > self.answer:
      self.result  = "high"
      return self.result 
    elif user_guess < self.answer:
      self.result  = "low"
      return self.result 
    else:
      self.result  = "correct"
      return self.result 


  def solved(self):
    return self.result == "correct"


game = GuessingGame(randint(1,100))
while game.solved() == False:
  ask_for_guess = int(input("Enter your guess: \n"))
  current_guess = game.guess(ask_for_guess)
  if current_guess != "correct":
    print(f"Your guess {ask_for_guess} is {current_guess}. Please try again.")
  else:
    print (f"{ask_for_guess} is correct. Well done!")