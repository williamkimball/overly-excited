let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray, characterInput = "!") {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""
    let character = `${characterInput}`

    for (i = 1; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        if (i % 3 === 0 ) {
            buildMeUp += `${theWordArray[i-1]}${character} `
            character += `${characterInput}`;
        } else {
            buildMeUp += `${theWordArray[i-1]} `;
        }
        // Print buildMeUp to the console
        console.log(buildMeUp)
    }

}
addExcitement(sentence)
addExcitement(sentence, '@')