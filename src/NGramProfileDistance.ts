import {NGramProfiles} from "./NGramProfiles";

export namespace NGramProfileDistance {

    import NGramProfile = NGramProfiles.NGramProfile;

    /**
     * Implement a profile distance function that computes the distance between
     * two profiles as a number such that identical profiles return 0,
     * completely disjoint profiles which don't share any ngrams in common
     * return profile.length ^ 2.  Basically if every single entry misses then
     * we keep adding up profile.length.
     *
     * So of we specify two profiles of length 10, and they are disjoint, the
     * distance would be 100.
     *
     * profile.length is just the length of the profile
     *
     * Both profiles 'a' and 'b' need to be of the same length.
     */
    export function compute(a: NGramProfile, b: NGramProfile): number {
        throw new Error("Not implemented");
    }

}
