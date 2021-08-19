def insertion_sort(l):
    for i in range(1, len(l)):
        aux = l[i]
        position = None

        for j in range(i - 1, -1, -1):
            position = j - 1

            if l[j] <= aux:
                break

            l[j + 1] = l[j]

        l[position + 1] = aux

    return l


def run():
    print(insertion_sort([2, 7, 1, 5, 0, 4, 3, 8, -1, 2, 4]))
    print(insertion_sort([2, 7, 1, 4, 3, 5, 0, 8, 2, -1, 2]))
    print(insertion_sort([7, 2, 1, 4, 0, 5, 6, 8, 2]))


if __name__ == "__main__":
    run()
