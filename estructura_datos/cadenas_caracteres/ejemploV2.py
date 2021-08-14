def checkPal2(str):
    for i in range(len(str) // 2):
        if str[i] != str[len(str) - i - 1]:
            return False

    return True


def run():
    checkPal2("allivessevilla")


if __name__ == "__main__":
    run()
