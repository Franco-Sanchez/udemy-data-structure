def subtraction_v1(num1, num2):
  return num1 + (num2 * -1)


def subtraction_v2(num1, num2):
  value = 0

  if num1 > num2:
    value = increment_value(num1, num2, value)
  elif num2 > num1:
    value = increment_value(num2, num1, value)
    return value * -1
  return value


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