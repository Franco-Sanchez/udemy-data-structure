def calculateBMA(my_list):
    bigger = my_list[0]
    minor = my_list[0]
    sum = 0

    for i in range(len(my_list)):
        if bigger < my_list[i]:
            bigger = my_list[i]
        
        if minor > my_list[i]:
            minor = my_list[i]
        
        sum += my_list[i]

    average = round((sum / len(my_list)), 2)

    return {
        "bigger": bigger,
        "minor": minor,
        "average": average
    }

def run():
    print(calculateBMA([1.2, 4.5, 0.2, 5.6, 2.3])) # {'bigger': 5.6, 'minor': 0.2, 'average': 2.76}


if __name__ == "__main__":
    run()