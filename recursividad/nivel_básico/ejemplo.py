def countdown(num):
    print(num)
    countdown(num - 1) if num > 0 else print("BOOM!")


def run():
    countdown(5)


if __name__ == "__main__":
    run()
