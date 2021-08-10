def are_numbers_friends(num1, num2):
    if num1 <= 0 or num2 <= 0:
        return f"{num1} and {num2} aren't numbers friends"

    sum_of_divisors_of_the_first_number = 0

    for i in range(1, (num1 // 2) + 1):
        if num1 % i == 0:
            sum_of_divisors_of_the_first_number += i

    if sum_of_divisors_of_the_first_number == num2:
        sum_of_divisors_of_the_second_number = 0

        for i in range(1, (num2 // 2) + 1):
            if num2 % i == 0:
                sum_of_divisors_of_the_second_number += i

        if sum_of_divisors_of_the_second_number == num1:
            return f"{num1} and {num2} are numbers friends."

    return f"{num1} and {num2} aren't numbers friends"


def run():
    print(are_numbers_friends(220, 284))
    print(are_numbers_friends(210, 274))


if __name__ == "__main__":
    run()
