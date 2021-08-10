def exponentiation_v1(num1, num2):
    result = 1

    if (num1 == 0 and num2 == 0) or num2 == 0:
        return result
    elif num1 == 0:
        return 0

    while num2:
        num2 -= 1
        result *= num1

    return result


def run():
    pass


if __name__ == "__main__":
    run()
