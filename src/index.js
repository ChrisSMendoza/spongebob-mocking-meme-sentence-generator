import { generateSpongebobMockMemeText } from "./spongebob-mock-meme-generate.js"

const textInput = document.querySelector("#textInput");
textInput?.addEventListener("input", showMockMemeText);

function showMockMemeText(event) {
    const userText = event.target.value;

    const mockMemeText = generateSpongebobMockMemeText(userText);

    const outputTextField = getOutputTextElementOrThrow()

    outputTextField.value = mockMemeText;
}

const copyToClipboardButton = document.querySelector("#copy-to-clipboard-button");
copyToClipboardButton?.addEventListener("click", handleOnCopyToClipboard)

function handleOnCopyToClipboard() {
    // Get the meme formatted text that's shown to the user
    const { value: spongebobMockMemeText } = getOutputTextElementOrThrow()

    // Copy the text to their clipboard, user can paste it now
    navigator.clipboard.writeText(spongebobMockMemeText);
}

/**
 *
 * @returns {HTMLInputElement} Output text field
 * @throws
 */
function getOutputTextElementOrThrow() {
    /** @type {HTMLInputElement | null} */
    const outputTextField = document.querySelector("#spongebob-mock-formatted-text");

    if(outputTextField) {
        return outputTextField;
    }

    throw Error("Output text field was not found in DOM with expected ID")
}