// Favor lowercase letters by default since we think it looks better
export const UPPERCASE_ODDS_DEFAULT = .30

export function generateSpongebobMockMemeText(text, uppercaseOddsFromUser) {
    const uppercaseOdds = uppercaseOddsFromUser ?? UPPERCASE_ODDS_DEFAULT;
    const lettersForMeme = [];

    for (var i = 0; i < text.length; i++) {
        const letter = text.charAt(i);

        if (Math.random() <= uppercaseOdds) {
            lettersForMeme.push(letter.toUpperCase());
        } else {
            lettersForMeme.push(letter.toLowerCase());
        }
    }
    return lettersForMeme.join("");
}
