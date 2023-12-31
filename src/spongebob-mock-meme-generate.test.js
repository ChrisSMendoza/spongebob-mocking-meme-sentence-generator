import { strictEqual } from 'node:assert'
import test from 'node:test'

import { generateSpongebobMockMemeText } from './spongebob-mock-meme-generate.js'


test("Generates meme text with expected distribution", () => {
    const sentence = "this text is totally not mocking you";
    const memeText = generateSpongebobMockMemeText(sentence)

    const letterRegex = RegExp(/^\p{L}/,'u');
    const letters = [...memeText].filter((letter) => letterRegex.test(letter))

    const lowercaseLetters = letters.filter(isLowerCase)
    const uppercaseLetters = letters.filter(isUpperCase)

    const percentOfLowercase = lowercaseLetters.length / letters.length
    const percentOfUppercase = uppercaseLetters.length / letters.length
    // TODO: Get this from module
    const oddsOfUppercase = .30
    const oddsOfLowercase = 1 - oddsOfUppercase
    const okayDelta = .15

    strictEqual(isWithinRange(percentOfUppercase, oddsOfUppercase, okayDelta), true)
    strictEqual(isWithinRange(percentOfLowercase, oddsOfLowercase, okayDelta), true)
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

test("Numbers can be detected within range", () => {
    const value = .4
    const target = .3
    const delta = .2
    const offset = .1

    strictEqual(offset < delta, true)

    strictEqual(isWithinRange(value, target, delta), true)
    strictEqual(isWithinRange(value + offset, target, delta), true)
    strictEqual(isWithinRange(value - offset, target, delta), true)

    strictEqual(isWithinRange(value + (delta * 2), target, delta), false)
})

function isWithinRange(actual, target, delta) {
    const start = target - delta
    const end = target + delta

    return start <= actual && actual <= end
}

function isLowerCase(char) {
    return char === char.toLowerCase()
}

function isUpperCase(char) {
    return char === char.toUpperCase()
}