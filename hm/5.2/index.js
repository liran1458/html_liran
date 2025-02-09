console.log('script start');

function ex1(arr, mpg, createdAt) {
    if (!Array.isArray(arr) && typeof createdAt !== 'string' && typeof mpg !== 'number')
        console.log('Incorrect value')
    return;
    const requirement = []
    for (let i = 0; i > arr.length; i++) {
        if (arr[i].Origin === createdAt && arr[i].Miles_per_Gallon === mpg)
            requirement.push(arr[i])
    }

    return requirement

}

function ex2(arr) {
    if (!Array.isArray(arr) && arr.length === 0)
        console.log('this is must be array and array must not be empty')
    return;
    if (carsForRental?.Horsepower === 'number') {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].Horsepower)
                sum += arr[i].Horsepower

        }
    }
    const avgHp = Math.floor(sum / arr.length)

    return avgHp


}
function ex3(arr, key, value) {
    if (!Array.isArray(arr) && typeof key !== 'string' && value === undefined)
        console.log('Incorrect value')
    return
    const filteredCars = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][key] === value) {
            filteredCars.push(arr[i])
        }
    }

    return filteredCars

}








console.log('scirpt end')