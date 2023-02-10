def credit_check(str):
    str_to_list = list(str)
    for i in range(1, len(str_to_list), 2):
        str_to_list[i] = int(str_to_list[i])
    for i in range(0,len(str_to_list), 2):
        new_int = int(str_to_list[i]) * 2
        if new_int > 9:
            new_int = new_int%10 +1
        str_to_list[i] = new_int
    sum_digits = sum(str_to_list)
    return  "The number is valid!" if sum_digits % 10 == 0 else "The number is invalid!"


# Your Luhn Algorithm Here
# Expected Output:
# If it is valid, print "The number is valid!"
# If it is invalid, print "The number is invalid!"

