import { occurences } from "../src/occurences";

describe('occurences', () => {
    it('return expected occurences', () => {
        let oc = occurences(["Ad", "7h", "8d", "As", "7s"])
        expect(oc.as).toEqual(2)
        expect(oc.seven).toEqual(2)
        expect(oc.eight).toEqual(1)
    });
});