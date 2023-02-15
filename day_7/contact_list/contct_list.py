class ContactList:
  def __init__(self, name, contact_list):
    self.contact_list = contact_list
    self.name = name

  def add_contact(self, new_contact):
    self.contact_list.append(new_contact)
    self.sort_list()


  def remove_contact(self, name):
    for item in self.contact_list:
      if name in item['name']:
        self.contact_list.remove(item)
    self.sort_list()

  
  def sort_list(self):
    return sorted(self.contact_list, key=lambda name: name in self.contact_list)

  
  def find_shared_contacts(self,contact_list):
    return ContactList("Shared_List",[contact for contact in self.contact_list if contact in contact_list.contact_list])


friends = [{'name':'Alice','number':'867-5309'},{'name':'Bob', 'number':'555-5555'}]
work_buddies = [{'name':'Alice','number':'867-5309'},{'name':'Carlos', 'number':'555-5555'}]

my_friends_list = ContactList('My Friends', friends)
my_work_buddies = ContactList('Work Buddies', work_buddies)
my_friends_list.add_contact({'name':"John", "number":"978-7665"})
my_friends_list.add_contact({'name':"Jake", "number":"978-8424"})
my_work_buddies.add_contact({'name':"John", "number":"978-7665"})

print(my_friends_list.contact_list)
my_friends_list.remove_contact("Jake")
print(my_friends_list.contact_list)
friends_i_work_with = my_friends_list.find_shared_contacts(my_work_buddies)
print(friends_i_work_with.contact_list)
