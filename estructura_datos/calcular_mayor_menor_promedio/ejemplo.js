const calculateBMA = (arr) => {
    let bigger = arr[0];
    let minor = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if(bigger < arr[i]) bigger = arr[i];
        if(minor > arr[i]) minor = arr[i];
        sum += arr[i];
    }

    const average = Number((sum / arr.length).toFixed(2))

    return {
        bigger,
        minor,
        average
    }
};

console.log(calculateBMA([1.2, 4.5, 0.2, 5.6, 2.3])); // { bigger: 5.6, minor: 0.2, average: 2.76 }