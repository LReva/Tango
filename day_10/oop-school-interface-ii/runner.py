from classes.school import School

school = School('Ridgemont High')

prompt = """
What would you like to do?
Options:
1. List All Students
2. View Individual Student <student_id>
3. Add a Student
4. Remove a Student <student_id>
5. Quit
"""

while True:
  try:
     mode = int(input(prompt)) 
  except ValueError:
     print("Please enter a valid number.")
     continue
  if mode == 1:
    print(school.list_students())
  elif mode == 2:
      try:
        student_id = int(input('Enter student id:'))
        student = school.find_student_by_id(student_id)
        if student : print(student)
      except ValueError:
         print("Please input a valid 5 digit number")
  elif mode == 3:
    student_data = {'role':'student'}
    student_data['name']      = input('Enter student name:\n')
    student_data['age']       = input('Enter student age: \n')
    student_data['school_id'] = input('Enter student school id: \n')
    student_data['password']  = input('Enter student password: \n')
    school.add_student(student_data)
  elif mode == 4:
    try:
      student_id = int(input('Enter student id:'))
      school.delete_student(student_id)
    except ValueError:
      print("Please input a valid 5 digit number")
  elif mode == 5:
      break