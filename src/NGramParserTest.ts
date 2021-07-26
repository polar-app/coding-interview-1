import {assert} from 'chai'
import {NGramParser} from "./NGramParser";

describe("NGramParser", function() {

    it("basic 2", function () {

        const ngrams: string[] = [];

        NGramParser.parse("Hello World", 2, ngram => ngrams.push(ngram));

        console.log(ngrams);
        assert.deepEqual(ngrams, [
            "He",
            "el",
            "ll",
            "lo",
            "o ",
            " W",
            "Wo",
            "or",
            "rl",
            "ld"
        ])

    })

    it("basic 3", function () {

        const ngrams: string[] = [];

        NGramParser.parse("Hello", 3, ngram => ngrams.push(ngram));

        console.log(ngrams);
        assert.deepEqual(ngrams, [
            "Hel",
            "ell",
            "llo",
        ])

    })


    it("empty", () => {

        const ngrams: string[] = [];

        NGramParser.parse("", 2, ngram => ngrams.push(ngram));

        assert.deepEqual(ngrams, [
        ])

    });

    it("one char", () => {

        const ngrams: string[] = [];

        NGramParser.parse("h", 2, ngram => ngrams.push(ngram));

        assert.deepEqual(ngrams, [
        ])

    });

    it("two chars", () => {

        const ngrams: string[] = [];

        NGramParser.parse("he", 2, ngram => ngrams.push(ngram));

        assert.deepEqual(ngrams, [
            "he"
        ])

    });

    it("three chars", () => {

        const ngrams: string[] = [];

        NGramParser.parse("hel", 2, ngram => ngrams.push(ngram));

        assert.deepEqual(ngrams, [
            "he",
            "el"
        ])

    });

});
