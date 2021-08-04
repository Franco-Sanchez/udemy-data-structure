const subtractionV1 = (num1, num2) => num1 + (num2 * -1);


// solucion profe con casos de uso agregados

const subtractionV2 = (num1, num2) => {
    let result = 0;

    if(num1 > num2) {
        result = incrementValue(num1, num2, 0);
    } else if(num2 > num1) {
        result = incrementValue(num2, num1, 0);
        return result * -1;
    }
    return result;
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