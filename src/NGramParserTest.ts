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

});
