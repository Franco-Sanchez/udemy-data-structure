def first_duplicate(l):
    copy_l = l[:]
    aux_acumulator = set()
    dict_of_duplicates = {}

    for i, element in enumerate(copy_l):
        if element in aux_acumulator:
            dict_of_duplicates[element] = [*dict_of_duplicates[element],
                                           i] if element in dict_of_duplicates else [i]

        aux_acumulator.add(element)

    arr_of_keys = list(dict_of_duplicates.keys())

    if not len(arr_of_keys) > 0:
        return -1

    min = arr_of_keys[0]

    for element in arr_of_keys:
        if dict_of_duplicates[min][0] > dict_of_duplicates[element][0]:
            min = element

    return min


def run():
    print(first_duplicate([2, 1, 3, 5, 3, 2]))  # 3
    print(first_duplicate([2, 4, 3, 5, 1]))  # -1
    print(first_duplicate([1]))  # -1
    print(first_duplicate([2, 2]))  # 2
    print(first_duplicate([2, 1]))  # -1
    print(first_duplicate([2, 1, 3]))  # -1
    print(first_duplicate([2, 3, 3]))  # 3
    print(first_duplicate([3, 3, 3]))  # 3
    print(first_duplicate([8, 4, 6, 2, 6, 4, 7, 9, 5, 8]))  # 6
    print(first_duplicate([10, 6, 8, 4, 9, 1, 7, 2, 5, 3]))  # -1
    print(first_duplicate([1, 1, 2, 2, 1]))  # 1


if __name__ == "__main__":
    run()
