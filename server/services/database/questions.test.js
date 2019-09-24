const { flattenTags } = require("./questions");

describe("questions.js", () => {
  test("should return the flatten array of the tags", () => {
    const input = [
      {
        tags: null
      },
      {
        tags: ["arabic", "english"]
      },
      {
        tags: ["other"]
      },
      {
        tags: ["greek", "english"]
      },
      {
        tags: ["other1", "arabic", "english", "english"]
      }
    ];
    const expectation = ["arabic", "english", "other", "greek", "other1"];
    expect(flattenTags(input)).toEqual(expectation);
  });
});
