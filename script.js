function replaceMiddleWithLetter(text, letter) {
    if (text.length % 2 === 0) {
        const middleIndex = text.length / 2;
        const newText = text.substring(0, middleIndex - 1) + letter + text.substring(middleIndex + 1);
        return newText;
    } else {
        const middleIndex = Math.floor(text.length / 2);
        const newText = text.substring(0, middleIndex) + letter + text.substring(middleIndex + 1);
        return newText;
    }
}

let originalText = "...A.....................................B.....";
let newText = replaceMiddleWithLetter(originalText, "C");
console.log(newText);