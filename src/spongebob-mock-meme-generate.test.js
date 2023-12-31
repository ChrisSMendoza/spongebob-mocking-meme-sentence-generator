import { strictEqual } from 'node:assert'
import test from 'node:test'

import { generateSpongebobMockMemeText } from './spongebob-mock-meme-generate.js'


// TODO: Base test around the number of lowercase and uppercase letters
test("Generates meme text", () => {
    const sentence = "this text is totally not mocking you";
    const memeText = generateSpongebobMockMemeText(sentence)
    // Naively test there's at least 1 lowercase and uppercase letter
    const hasLowercase = [...memeText].some(isLowerCase)
    const hasUppercase = [...memeText].some(isUpperCase)

    strictEqual(hasLowercase, true)
    strictEqual(hasUppercase, true)
})

test("Counts number of letters in sentence", () => {
    const sentence = "this text is totally not mocking you";

    // TypeError [Error]: Method RegExp.prototype.test called on incompatible receiver undefined
    // error occurred when regex `test` is passed directly into `filter`
    const letterRegex = RegExp(/^\p{L}/,'u');
    const letters = [...sentence].filter((letter) => letterRegex.test(letter))

    strictEqual(letters.length, 30)
});

test("Lowercase letter detected", () => {
    strictEqual(isLowerCase('a'), true)
    strictEqual(isLowerCase('z'), true)

    strictEqual(isLowerCase('A'), false)
    strictEqual(isLowerCase('Z'), false)
})

test("Uppercase letter detected", () => {
    strictEqual(isUpperCase('A'), true)
    strictEqual(isUpperCase('Z'), true)

    strictEqual(isUpperCase('z'), false)
    strictEqual(isUpperCase('a'), false)
})

function isLowerCase(char) {
    return char === char.toLowerCase()
}

function isUpperCase(char) {
    return char === char.toUpperCase()
}