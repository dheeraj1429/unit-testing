import { toUpperCase, getStringInfo, StringUtils } from "../app/utils";

// describe("utils test suite", () => {
//   test("should return upper case string", () => {
//     const result = toUpperCase("hello world");
//     expect(result).toBe("HELLO WORLD");
//   });
// });

// proper way to write tests
// AAA principle
// A - arrange
// A - act
// A - assert
describe("utils test suite", () => {
  describe.only("String utils test", () => {
    let sut: StringUtils;

    beforeEach(() => {
      console.log("Setup");
      sut = new StringUtils();
    });

    afterAll(() => {
      console.log("Teardown");
    });

    it.todo("test case in pending state");

    it("Should return correct upper case string", () => {
      console.log("Actual testing..");
      const expected = "HELLO WORLD";
      const actual = sut.toUpperCase(expected);
      expect(actual).toBe(expected);
    });

    it("Should throw error an invalid provide arguments", () => {
      expect(() => {
        sut.toUpperCase("");
      }).toThrow();
    });

    it("Should throw error in invalid provide arguments with try and catch block", (done) => {
      try {
        sut.toUpperCase("");
        done("GetStringInformation should throw error");
      } catch (err) {
        expect(err).toBeInstanceOf(Error);
        expect(err).toHaveProperty("message", "Invalid provide arguments");
        done();
      }
    });
  });

  // one time tests
  it.skip("should return a valid upper case string", () => {
    const expected = "HELLO WORLD";
    const actual = toUpperCase("hello world");
    expect(actual).toBe(expected);
  });

  it("should return information of valid string", () => {
    const arg = "hello world";
    const actual = getStringInfo(arg);

    expect(actual.lowerCase).toBe(arg.toLocaleLowerCase());
    expect(actual.upperCase).toBe(arg.toUpperCase());
    expect(actual.extraInfo).toEqual({});

    expect(actual.characters.length).toBe(arg.length);
    expect(actual.characters).toHaveLength(arg.length);

    expect(actual.characters).toEqual(Array.from(arg));
    expect(actual.characters).toContain<string>("h");

    expect(actual.extraInfo).not.toBe(undefined);
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toBeDefined();
  });

  // test cases for each values.
  describe("getStringInfo for arg hello world should", () => {
    const arg = "hello world";
    const actual = getStringInfo(arg);

    it("return right length of string", () => {
      expect(actual.characters.length).toBe(arg.length);
      expect(actual.characters).toHaveLength(arg.length);
    });

    it("return right lower case of string", () => {
      expect(actual.lowerCase).toBe(arg.toLocaleLowerCase());
    });

    it("return right upper case of string", () => {
      expect(actual.lowerCase).toBe(arg.toLowerCase());
    });

    it("return array contains strings", () => {
      expect(actual.characters).toEqual(Array.from(arg));
      expect(actual.characters).toContain<string>("h");
    });

    it("return return some extra string information", () => {
      expect(actual.extraInfo).not.toBe(undefined);
      expect(actual.extraInfo).not.toBeUndefined();
      expect(actual.extraInfo).toBeDefined();
      expect(actual.extraInfo).toBeDefined();
    });
  });

  // testing with parameters
  describe("toUpperCase examples", () => {
    it.each([
      { input: "hello world", expected: "HELLO WORLD" },
      { input: "hello", expected: "HELLO" },
      { input: "abc", expected: "ABC" },
    ])("$input should be $expected", ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });
});
