function convertFtoC(fahrenheit){
    return `Fahrenheit: ${fahrenheit} degrees\nCelsius: ${Math.round((fahrenheit - 32) * (5/9))} degrees`;
};

console.log(convertFtoC(212));
console.log(convertFtoC(90));
console.log(convertFtoC(72));
console.log(convertFtoC(32));
console.log(convertFtoC(0));
console.log(convertFtoC(-40));
