
export function generateSpongebobMockMemeText(text) {
    const lettersForMeme = [];

    for (var i = 0; i < text.length; i++) {
        const letter = text.charAt(i);

        // We favor lowercase letters since it looks better 

        if (Math.random() < .30) {
            lettersForMeme.push(letter.toUpperCase());
        } else {
            lettersForMeme.push(letter.toLowerCase());
        }
    }
    return lettersForMeme.join("");
}
