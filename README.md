# Spongebob Mock Meme Text Generator

Barebones web front-end to generate the Spongebob mocking meme text. It looks like this: "ThIS tExT is tOtally not moCking yOu"

A preview of the text, an input box, a copy button, a link to the meme generator, and a banner to explain how to get lowercase letters in the generator.

## Serve locally
- Uses `npx`
```sh
npm start
```

## Test
```sh
npm run test
```

```
> spongebob-mocking-meme-sentence-generator@1.0.0 test
> node src/spongebob-mock-meme-generate.test.js

✔ Generates meme text (1.381362ms)
✔ Lowercase letter detected (0.115193ms)
✔ Uppercase letter detected (0.119585ms)
ℹ tests 3
ℹ suites 0
ℹ pass 3
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 10.414941
```