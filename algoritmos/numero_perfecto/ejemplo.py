def is_a_perfect_number(n):
    if n == 0:
        return False

    value = 0
    for i in range(1, (n // 2) + 1):
        if n % i == 0:
            value += i

    if value == n:
        return True

    return False


def run():
    is_a_perfect_number(6)
    is_a_perfect_number(28)
    is_a_perfect_number(496)
    is_a_perfect_number(8128)


if __name__ == "__main__":
    run()
