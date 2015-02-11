describe("anagram", function() {
  it("checks for single word anagrams", function() {
    expect(anagram("cat", ["act"])).to.eql(["act"]);
  });

  it("checks for multiple anagrams", function() {
    expect(anagram("cat", ["act", "tac"])).to.eql(["act", "tac"]);
  });
});
