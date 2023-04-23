def calculate_string(num):
    total = 0
    for i in range(len(int(num))):
        total += int(num[i])
    print(total)

calculate_string('345')