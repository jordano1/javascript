let farToKel = (f) =>{
    let k = (f + 459.67) * 5/9
    return k
}

let farToCel = (f) =>{
    let c = (f-32) * 5/9
    return c
}

let fahrenheit = 32 //0c - 273.15k
console.log("fahrenheit: " + fahrenheit)
//calculate celsius and store in celsius var
//print value
console.log("fahrenheit converted to Celcius : " + farToCel(fahrenheit))


//calc kelvin and store in var
//print value

console.log("fahrenheit converted to Kelvin: " + farToKel(fahrenheit))
