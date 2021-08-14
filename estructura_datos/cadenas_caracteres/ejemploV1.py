def checkPal(str):
    transformedStr = str.lower().replace(" ", "")
    transformedStrReversed = transformedStr[::-1]
    return transformedStr == transformedStrReversed


def run():
    print(checkPal("allivessevilla"))


if __name__ == "__main__":
    run()
