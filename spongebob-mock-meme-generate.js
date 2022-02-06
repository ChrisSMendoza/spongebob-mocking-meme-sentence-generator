function flipACoin() {
    // Magic numbers are not okay.
    // I believe this is the ceiling value for the 
    // random number that's generated. It's non-inclusive,
    // only the numbers up to it, but not actually it.
    // Example, "* 4", could output: 0, 1, 2, 3

    // Hence this is 0 or 1, the odds are 50/50,
    // like flipping a coin.
    return Math.floor(Math.random() * 2);
}

function spongebobMockMemeGenerate(text) {
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

function showMockMemeText(event) {
    const userText = event.target.value;

    const mockMemeText = spongebobMockMemeGenerate(userText);

    const outputTextField = document.querySelector("#spongebob-mock-formatted-text");

    outputTextField.value = mockMemeText;
}

const textInput = document.querySelector("#textInput");
textInput.addEventListener("input", showMockMemeText);

const copyToClipboardButton = document.querySelector("#copy-to-clipboard-button");
copyToClipboardButton.addEventListener("click", handleOnCopyToClipboard)

function handleOnCopyToClipboard(event) {
    // Consideration: can't we just run the logic ourselves?
    // No, because that would generate another one, so it wouldn't 
    // match what's on the screen... Update the output text too??

    // Get the meme formatted text that's shown to the user
    const { value: spongebobMockMemeText } = document.querySelector("#spongebob-mock-formatted-text");

    const memeDisplayTextField = document.querySelector("#spongebob-mock-formatted-text");

    // Copy the text to their clipboard, user can paste it now
    navigator.clipboard.writeText(spongebobMockMemeText);
}