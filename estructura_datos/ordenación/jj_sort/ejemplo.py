def jj_sort(l):
    final_position = len(l) - 1

    for i in range(len(l) // 2):
        pos_min = i
        pos_max = i

        for j in range(i, final_position + 1):
            if l[j] > l[pos_max]:
                pos_max = j

            if l[j] < l[pos_min]:
                pos_min = j

        aux = l[pos_min]
        l[pos_min] = l[i]
        l[i] = aux

        if pos_max == i:
            pos_max = pos_min

        aux = l[final_position]
        l[final_position] = l[pos_max]
        l[pos_max] = aux

        final_position -= 1

    return l


def run():
    arrForSorted = [
        7, 28, 2, 53, 16, 13, 45, 345, 2345, 234, 35235, 123, 4346, 75, 4, 7, 3, 68,
        2, 6, 63, 2, 0, 68, 436, 12, 343, 54, 25, 13, 15, 2, 97, 81, 981, 618, 61,
        3280, 18, 5, 78, 23, 81, 65, 84, 72, 95,
    ]
    print(jj_sort(arrForSorted))


if __name__ == "__main__":
    run()
