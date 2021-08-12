def run():
    my_first_list = [None] * 6
    my_first_list[0] = 10
    my_first_list[1] = 20
    my_first_list[2] = 30
    my_first_list[3] = 40
    my_first_list[4] = 50
    my_first_list[5] = 60

    for i, element in enumerate(my_first_list):
        print(f"In the position {i} the element is {element}.")

    target = 40

    for i, element in enumerate(my_first_list):
        if element == target:
            print(f"The target {target} is in the position {i}.")


if __name__ == "__main__":
    run()
