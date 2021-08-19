def bubble_sort(l):
    size = len(l)
    rounds = 0
    ord = False

    while ord == False:
        ord = True

        for i in range(size - 1 - rounds):
            if l[i] > l[i + 1]:
                aux = l[i + 1]
                l[i + 1] = l[i]
                l[i] = aux

                ord = False

        rounds += 1

    return l


def run():
    print(bubble_sort([2, 7, 1, 5, 0, 4, 3, 8, -1, 2, 4]))
    print(bubble_sort([2, 7, 1, 4, 3, 5, 0, 8, 2, -1, 2]))
    print(bubble_sort([7, 2, 1, 4, 0, 5, 6, 8, 2]))


if __name__ == "__main__":
    run()
