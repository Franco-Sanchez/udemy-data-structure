def subtraction_v1(num1, num2):
  return num1 + (num2 * -1)


# solucion profe con casos de uso agregados

def subtraction_v2(num1, num2):
  result = 0

  if num1 > num2:
    result = increment_value(num1, num2, 0)
  elif num2 > num1:
    result = increment_value(num2, num1, 0)
    return result * -1
  return result


def increment_value(num1, num2, value):
  while num1 > num2:
      num2 += 1
      value += 1
  return value


def run():
  subtraction_v1(14, 10) # 4
  subtraction_v1(-10, 14) # -24
  subtraction_v1(20, 20) # 0
  subtraction_v1(22, -22) # 44

  subtraction_v2(14, 10) # 4
  subtraction_v2(-10, 14) # -24
  subtraction_v2(20, 20) # 0
  subtraction_v2(22, -22) # 44


if __name__ == "__main__":
  run()