def selection_sort(l):
    for i in range(len(l) - 1):
        position_min = i

        for j in range(i + 1, len(l)):
            if l[position_min] > l[j]:
                position_min = j

        aux = l[i]
        l[i] = l[position_min]
        l[position_min] = aux

    return l


def run():
    print(selection_sort([2, 7, 1, 5, 0, 4, 3, 8, -1, 2, 4]))
    print(selection_sort([2, 7, 1, 4, 3, 5, 0, 8, 2, -1, 2]))
    print(selection_sort([7, 2, 1, 4, 0, 5, 6, 8, 2]))


if __name__ == "__main__":
    run()
