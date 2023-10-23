function convertCtoF(celsius){
    return `Celsius: ${celsius} degrees\nFahrenheit: ${Math.round((celsius * (9/5)) + 32)} degrees`;
};

console.log(convertCtoF(100));
console.log(convertCtoF(45));
console.log(convertCtoF(19));
console.log(convertCtoF(0));
console.log(convertCtoF(-7));
console.log(convertCtoF(-40));