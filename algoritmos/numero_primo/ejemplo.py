def isPrime(num):
    for i in range(2, (num // 2) + 1):
        if num % i == 0:
            return False

    return True


def run():
    pass


if __name__ == "__main__":
    run()
