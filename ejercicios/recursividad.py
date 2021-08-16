def contiene(el, input):
    if el == input:
        return True

    if not isinstance(el, dict):
        return False

    list_of_values = list(el.values())

    if not len(list_of_values) > 0:
        return False

    result = None

    for element in list_of_values:
        result = contiene(element, input)
        if result == True:
            break

    return result


def run():
    objeto_anidado = {
        "data": {
            "informacion": {
                "alguna": {
                    "cosa": {
                        "muy": {
                            "anidada": {
                                "numeroMagico": 33,
                                "otraCosa": "foo2",
                            },
                        },
                    },
                    "otraCosa": {
                        "noTanAnidada": 55,
                    },
                },
            },
        },
    }

    print(contiene(objeto_anidado, 33))  # True
    print(contiene(objeto_anidado, "foo2"))  # True
    print(contiene(objeto_anidado, "foo"))  # False
    print(contiene(objeto_anidado, 55))  # True
    print(contiene(objeto_anidado, 80))  # False


if __name__ == "__main__":
    run()
