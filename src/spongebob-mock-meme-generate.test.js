import { strictEqual } from 'node:assert'
import test from 'node:test'

import { generateSpongebobMockMemeText } from './spongebob-mock-meme-generate.js'

test("Generates meme text", () => {
    const memeText = generateSpongebobMockMemeText("this text is totally not mocking you")

    strictEqual(true, !!memeText)
})

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