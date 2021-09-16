def search(d, key):
    if not isinstance(d, dict):
        return None

    if key in d:
        return d[key]

    list_of_keys = list(d.keys())

    if not len(list_of_keys) > 0:
        return None

    value = None

    for k in list_of_keys:
        value = search(d[k], key)

        if value:
            break

    return value


def run():
    d = {
        "a": {"b": 1},
        "c": 2,
        "d": {"e": {"f": 3}},
        "g": {}
    }

    print(search(d, "a"))  # {b : 1}
    print(search(d, "b"))  # 1
    print(search(d, "c"))  # 2
    print(search(d, "d"))  # {e: {f: 3}}
    print(search(d, "e"))  # {f: 3}
    print(search(d, "f"))  # 3
    print(search(d, "h"))  # None


if __name__ == "__main__":
    run()
