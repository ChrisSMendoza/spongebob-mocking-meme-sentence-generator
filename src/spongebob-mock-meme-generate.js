// Favor lowercase letters by default since we think it looks better
export const UPPERCASE_ODDS_DEFAULT = .30

/**
 * 
 * @param {string} text - Text to meme-ify
 * @param {number} [uppercaseOddsFromUser] - Odds of a letter becoming uppercase
 * 
 * @returns {string} Text in the Spongebob mocking meme format: toTalLy LiKe tHiS
 */
export function generateSpongebobMockMemeText(text, uppercaseOddsFromUser) {
    const uppercaseOdds = uppercaseOddsFromUser ?? UPPERCASE_ODDS_DEFAULT;

    const lettersForMeme = [...text]
        .map(letter => uppercaseOrLowercaseRandomly(letter, uppercaseOdds));

    return lettersForMeme.join("");
}

/**
 * @param {string} text
 * @param {number} uppercaseOdds
 */
function uppercaseOrLowercaseRandomly(text, uppercaseOdds) {

    if (Math.random() <= uppercaseOdds) {
        return text.toUpperCase();
    }

    return text.toLowerCase();
}
