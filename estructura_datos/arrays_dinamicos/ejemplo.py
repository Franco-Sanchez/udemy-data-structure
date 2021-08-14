def run():
    length = int(input("What is the length of the list? "))
    my_list = [None] * length

    for index, _ in enumerate(my_list):
        my_list[index] = int(
            input(f"Enter the number for the position {index}: "))

    print(my_list)


if __name__ == "__main__":
    run()
