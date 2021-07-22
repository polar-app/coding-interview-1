export namespace NGramParser {

    export type NGramStr = string;

    /**
     * Parse a string into an array of n-grams.
     *
     * An n-gram is a 'n' length string of overlapping terms.
     *
     * For example.
     *
     * Hello World with len=2 would have the following n-grams.
     *
     * He
     * el
     * lo
     * o
     *  W
     * Wo
     * or
     * rl
     * ld
     *
     * The parser should be 'streaming' and should not require excessive memory.
     *
     * No more than 10-20 bytes additional overhead for processing the string
     * and the overhead to store the array.
     */
    export function parse(text: string, len: number, callback: (ngram: NGramStr) => void) {
        return [];
    }

}
