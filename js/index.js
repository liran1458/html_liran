let email = `liran1458@gmail.com`
let hasJob = false
let age = 23
let firstName = 'liran'
let hasCar = true

console.log(`${firstName} ${hasJob} ${age} ${email} ${hasCar} `)
const carType = prompt('what is your car type')
const model = prompt("what is the model")
const carColor = prompt("what is the color")

if (carType === 'Mazda' && model === 'cx5' && carColor === 'red') {
    console.log('i like this car');

} else {
    console.log('i dont need this car')
}