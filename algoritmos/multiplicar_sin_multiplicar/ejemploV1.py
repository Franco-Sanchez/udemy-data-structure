def multiplication_v1(num1, num2):
    result = 0

    if num1 == 0 or num2 == 0:
        return result

    if num1 < 0 and num2 < 0:
        if num1 > num2 or num1 == num2:
            result = calculate_negative_v1(num2, num1, 0)
        else:
            result = calculate_negative_v1(num1, num2, 0)

        return result

    if num1 > num2 or num1 == num2:
        result = calculate_positive_v1(num2, num1, 0)
    else:
        result = calculate_positive_v1(num1, num2, 0)

    return result


def calculate_positive_v1(minor, bigger, value):
    for _ in range(1, bigger + 1):
        value += minor

    return value


def calculate_negative_v1(minor, bigger, value):
    for _ in range(-1, (bigger + (-1)), -1):
        value += minor

    return value


def run():
    pass


if __name__ == "__main__":
    run()
