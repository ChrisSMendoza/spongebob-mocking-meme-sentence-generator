
export const UPPERCASE_ODDS_DEFAULT = .30

export function generateSpongebobMockMemeText(text) {
    const lettersForMeme = [];

    for (var i = 0; i < text.length; i++) {
        const letter = text.charAt(i);

        // We favor lowercase letters since it looks better 

        if (Math.random() <= UPPERCASE_ODDS_DEFAULT) {
            lettersForMeme.push(letter.toUpperCase());
        } else {
            lettersForMeme.push(letter.toLowerCase());
        }
    }
    return lettersForMeme.join("");
}
