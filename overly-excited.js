let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""
    let exclamationCounter = "!"

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        if (i %3 === 0 ) {
            buildMeUp += `${theWordArray[i]}${exclamationCounter} `
            exclamationCounter += "!"
        }
        else {
            buildMeUp += `${theWordArray[i]} `;
        }
        // Print buildMeUp to the console
        console.log(buildMeUp)
    }

}

addExcitement(sentence)