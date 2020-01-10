/*Bryan Patten
patten_a04b.js
INFO 2124
Lisa Thoendel
01/09/2020*/

const firstName = "Bryan";
let weight = 242.0;
let height = "67 inches";
let n = parseFloat(height);
let age = "31";
const marsGravity = 0.38;
const inchesToMeters = 2.54;
let y = parseInt(age) * 365;
let z = y / 687;
const a = z.toFixed(2);
let w = parseFloat(weight) * marsGravity;
let b = w.toFixed(2);
let message = `
Hello there, ${ firstName }! On earth you weigh ${ weight.toFixed(1) } pounds.
But, since gravity is weaker on Mars, you would only weigh ${ String(b) } pounds there!

Neat huh? Want to know what else is neat?

Mars takes longer to rotate around the Sun than Earth does. This means the Mars year is actually
longer than our "terran" year. So although you are ${ Number(age) } years old on Earth, you're
only ${ a } years old on Mars.

Did you know, the European Space Agency requires potential astronauts to measure between
153 and 190 cm? Just in case you ever decide to move to Europe and want to be
an astronaut, your height in metric is ${ n * inchesToMeters } cm.
`
console.log(message)