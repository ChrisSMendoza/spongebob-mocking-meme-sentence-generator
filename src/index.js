import { generateSpongebobMockMemeText } from "./spongebob-mock-meme-generate.js"

const textInput = document.querySelector("#textInput");
textInput.addEventListener("input", showMockMemeText);

function showMockMemeText(event) {
    const userText = event.target.value;

    const mockMemeText = generateSpongebobMockMemeText(userText);

    const outputTextField = document.querySelector("#spongebob-mock-formatted-text");

    outputTextField.value = mockMemeText;
}

const copyToClipboardButton = document.querySelector("#copy-to-clipboard-button");
copyToClipboardButton.addEventListener("click", handleOnCopyToClipboard)

function handleOnCopyToClipboard() {
    // Get the meme formatted text that's shown to the user
    const { value: spongebobMockMemeText } = document.querySelector("#spongebob-mock-formatted-text");

    // Copy the text to their clipboard, user can paste it now
    navigator.clipboard.writeText(spongebobMockMemeText);
}