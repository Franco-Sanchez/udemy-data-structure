def subtraction_v2(num1, num2):
    result = 0

    if num1 > num2:
        result = increment_value(num1, num2, 0)
    elif num2 > num1:
        result = increment_value(num2, num1, 0)
        return result * -1
    return result


def increment_value(num1, num2, value):
    while num1 > num2:
        num2 += 1
        value += 1
    return value


def run():
    pass


if __name__ == "__main__":
    run()
