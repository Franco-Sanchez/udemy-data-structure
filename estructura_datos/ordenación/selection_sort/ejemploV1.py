def selection_sort(l):
    last_position = len(l) - 1
    initial_value = 0

    while initial_value < last_position:
        position_min = initial_value

        for i in range(initial_value, last_position):
            if l[position_min] > l[i + 1]:
                position_min = i + 1

        aux = l[position_min]
        l[position_min] = l[initial_value]
        l[initial_value] = aux

        initial_value += 1

    return l


def run():
    print(selection_sort([2, 7, 1, 5, 0, 4, 3, 8, -1, 2, 4]))
    print(selection_sort([2, 7, 1, 4, 3, 5, 0, 8, 2, -1, 2]))


if __name__ == "__main__":
    run()
