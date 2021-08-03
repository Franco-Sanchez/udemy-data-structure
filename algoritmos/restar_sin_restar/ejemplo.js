const subtractionV1 = (num1, num2) => num1 + (num2 * -1);

const subtractionV2 = (num1, num2) => {
    let value = 0;

    if(num1 > num2) {
        value = incrementValue(num1, num2, value);
    } else if(num2 > num1) {
        value = incrementValue(num2, num1, value);
        return value * -1;
    }
    return value;
};

const incrementValue = (num1, num2, value) => {
    while(num1 > num2) {
        num2++;
        value++;
    }
    return value;
}

subtractionV1(14, 10); // 4
subtractionV1(-10, 14); // -24
subtractionV1(20, 20); // 0
subtractionV1(22, -22); // 44

subtractionV2(14, 10); // 4
subtractionV2(-10, 14); // -24
subtractionV2(20, 20); // 0
subtractionV2(22, -22); // 44