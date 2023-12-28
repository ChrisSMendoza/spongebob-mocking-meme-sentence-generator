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

function isLowerCase(char) {
    return char === char.toLowerCase()
}