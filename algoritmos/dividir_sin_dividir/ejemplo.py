def division_v1(num1, num2):
    result = 0

    if num1 == 0:
        return 0
    elif num2 == 0:
        return

    while num1 >= num2:
        result += 1
        num1 -= num2

    return result


def run():
    pass


if __name__ == "__main__":
    run()
