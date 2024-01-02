// Favor lowercase letters by default since we think it looks better
export const UPPERCASE_ODDS_DEFAULT = .30

export function generateSpongebobMockMemeText(text, uppercaseOddsFromUser) {
    const uppercaseOdds = uppercaseOddsFromUser ?? UPPERCASE_ODDS_DEFAULT;

    const lettersForMeme = [...text]
        .map(letter => uppercaseOrLowercaseRandomly(letter, uppercaseOdds));

    return lettersForMeme.join("");
}

function uppercaseOrLowercaseRandomly(text, uppercaseOdds) {

    if (Math.random() <= uppercaseOdds) {
        return text.toUpperCase();
    }

    return text.toLowerCase();
}
