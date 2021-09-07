def factorial(num):
    return num * factorial(num - 1) if num > 1 else num


def run():
    print(factorial(5))


if __name__ == "__main__":
    run()
