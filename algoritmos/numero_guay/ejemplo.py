def is_a_guay_number(num):
    if num <= 0:
        return f"{num} isn't a guay number."

    sum = 0
    for i in range(1, (num // 2) + 1):
        sum += i
        if sum >= num:
            break

    if sum == num:
        return f"{num} is a guay number."

    return f"{num} isn't a guay number."


def run():
    pass


if __name__ == "__main__":
    run()
