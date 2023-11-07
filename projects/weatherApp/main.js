/* Date: Aug 8 2023
    Reference:
- https://www.codecademy.com/courses/introduction-to-javascript/projects/kelvin-weather-javascript
*/

// 273 = 0 = 32
// 283 = 10 = 50 (10 - 10 - 18)

// Task 0
const kelvin_Base = 273;
function Fahrenheit_formula(Celsius) {
    // const Fahrenheit_formula = Math.floor(Celsius * (9/5) + 32);
    const Fahrenheit_formula = Celsius * (9/5) + 32;
    return Fahrenheit_formula;
}

const kelvin = 293;
var celsius = kelvin - 273;
var temperature = Fahrenheit_formula(celsius);


console.log(`The temperature is ${temperature} degrees Fahrenheit`);