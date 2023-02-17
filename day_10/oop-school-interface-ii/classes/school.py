from .staff import Staff
from .student import Student

class School:
    def __init__(self, name):
        self.name = name
        self.staff = Staff.objects()
        self.students = Student.objects()

    def list_students(self):
        return "\n".join([' '.join([str(i+1) + ".", student.name, student.school_id]) for i, student in enumerate(self.students)])
    
    def find_student_by_id(self, id):
        for student in self.students:
            if student.school_id == id:
                return student
            
    def add_student(self, student_data):
        new_student = Student(**student_data)
        self.students.append(new_student)

    def delete_student(self, id):
        student_to_delete = self.find_student_by_id(id)
        self.students.remove(student_to_delete)