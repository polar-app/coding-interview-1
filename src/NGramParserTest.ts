import {assert} from 'chai'
import {NGramParser} from "./NGramParser";

describe("NGramParser", function() {

    it("basic", function () {

        const ngrams: string[] = [];

        NGramParser.parse("Hello World", 2, ngram => ngrams.push(ngram));

        assert.deepEqual(ngrams, [
            "He",
            "el",
            "lo",
            "o ",
            " W",
            "Wo",
            "or",
            "rl",
            "ld"
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
            "he"
        ])

    });

});
