def factorial_v1(num):
    if num == 0:
        return 0

    result = 1

    for i in range(1, num + 1):
        result *= i

    return result

def run():
    pass


if __name__ == "__main__":
    run()