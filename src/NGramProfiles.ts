import {NGramParser} from "./NGramParser";

export namespace NGramProfiles {

    import NGramStr = NGramParser.NGramStr;

    /**
     * The NGram rank including the text of the ngram, and it's count.
     */
    export interface INGramRank {
        readonly text: NGramStr;
        readonly count: number;
    }

    export type NGramProfile = ReadonlyArray<INGramRank>;

    /**
     * Give some text, and an n-gram length, compute a score of the n-grams and
     * then return the top N grams as a result.
     *
     * IMPORTANT: given text for a language, what's the maximum amount of space
     * that would be stored for n-gram limits?
     *
     * @param text The text for computing ngrams.
     * @param len The len of the ngrams.
     * @param limit the max number of ranked ngrams to return.
     */
    export function compute(text: string, len: number, limit: number): NGramProfile {
        return [];
    }

}
