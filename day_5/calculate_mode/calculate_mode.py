# The method `calculate_mode` will take a list of numbers or strings as its input and return a list of the most frequent values.

# If there's only one most-frequent value, it returns a single-element list.


def calculate_mode(lst):
    dict_lst = {}
    result = []
    for i in lst:
        if i in dict_lst:
            dict_lst[i] +=1
        else:
            dict_lst[i] = 1
    mode_max = max(dict_lst.values())
    for key in dict_lst.keys():
        if dict_lst[key] == mode_max:
            result.append(key)
    return result


print(calculate_mode([1,2,3,3]))         # => [3]
print(calculate_mode([4.5, 0, 0]))       # => [0]
print(calculate_mode([1.5, -1, 1, 1.5])) # => [1.5]
print(calculate_mode([1,1,2,2]))         # => [1,2]
print(calculate_mode([1,2,3]))           # => [1,2,3], because all occur with equal frequency
print(calculate_mode(["who", "what", "where", "who"])) # => ["who"]