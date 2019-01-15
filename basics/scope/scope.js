//lexical scope ( static scope )
//global scope - defined outside of all code blocks
//local scope - defined inside a code block
let varOne = "varOne"
let varTwo = "varTwo"

if (true) {
    console.log(varOne)
    console.log(varTwo)
    if (true) {
        let varFour = "varFour"
    }
}

if (true) {
    let varThree = "varThree"
}
console.log(varTwo)