const expect = require("chai").expect;
const camelCase = require("../").camelCase;

describe("camelCase", () => {
  it("It returns an string if string is empty", () => {
    const empty = "";
    expect(camelCase(empty)).to.equal("");
  });

  it("returns one combined word", () => {
    const oneWord = "test";
    const twoWords = "This is working";
    expect(camelCase(oneWord)).to.equal("test");
    expect(camelCase(twoWords)).to.equal("thisIsWorking");
  });

  it("returns all lowercase letters for the first word", () => {
    const mixedCases = "aBRa";
    const moreMixedCases = "KADabra";
    expect(camelCase(mixedCases)).to.equal("abra");
    expect(camelCase(moreMixedCases)).to.equal("kadabra");
  });

  it("returns camel case for sentences", () => {
    const mixedSentence = "ShE seLLS SeaSheLlS";
    const spicyNoods = "I like to eat Spicy NOODLES";
    const randomWords = "cOMBinG THroUgh sOMe T e S T cases";
    expect(camelCase(mixedSentence)).to.equal("sheSellsSeashells");
    expect(camelCase(spicyNoods)).to.equal("iLikeToEatSpicyNoodles");
    expect(camelCase(randomWords)).to.equal("combingThroughSomeTESTCases");
  });
});
