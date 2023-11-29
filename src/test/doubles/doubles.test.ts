import {
  calculateComplexity,
  toUpperCaseWithCb,
  OtherStringUtils,
} from "../../app/doubles/doubles";

describe("Other utils test suite", () => {
  describe("OtherStringUtils - test with spies", () => {
    let sut: OtherStringUtils;

    beforeEach(() => {
      sut = new OtherStringUtils();
    });

    test("Use a spy to track calls", () => {
      const toUpperCaseSpy = jest.spyOn(sut, "toUpperCase");
      sut.toUpperCase("abc");
      expect(toUpperCaseSpy).toHaveBeenCalledWith("abc");
    });

    test("Use a spy to track console", () => {
      const loggerSpy = jest.spyOn(console, "log");
      sut.logString("abc");
      expect(loggerSpy).toHaveBeenCalledWith("abc");
    });
  });

  it("ToUpperCase - calls callback for invalid arguments!", () => {
    const actual = toUpperCaseWithCb("", () => {});
    expect(actual).toBeUndefined();
  });

  it("ToUpperCase - calls callback for valid arguments!", () => {
    const actual = toUpperCaseWithCb("abc", () => {});
    expect(actual).toBe("ABC");
  });

  describe("Tracking callback with jest mocks", () => {
    const callBackMock = jest.fn();

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("ToUpperCase - calls callback for valid arguments - track call", () => {
      const actual = toUpperCaseWithCb("abc", callBackMock);
      expect(actual).toBe("ABC");
      expect(callBackMock).toHaveBeenCalledWith("called function with abc");
      expect(callBackMock).toHaveBeenCalledTimes(1);
    });

    it("ToUpperCase - calls callback for invalid arguments - track call", () => {
      const actual = toUpperCaseWithCb("", callBackMock);
      expect(actual).toBeUndefined();
      expect(callBackMock).toHaveBeenCalledWith("Invalid arguments!");
      expect(callBackMock).toHaveBeenCalledTimes(1);
    });
  });

  describe("Tracking callback", () => {
    let args = [];
    let timeCalled = 0;

    function callBackMock(arg: string) {
      timeCalled++;
      args.push(arg);
    }

    afterEach(() => {
      args = [];
      timeCalled = 0;
    });

    it("ToUpperCase - calls callback for valid arguments - track call", () => {
      const actual = toUpperCaseWithCb("abc", callBackMock);
      expect(actual).toBe("ABC");
      expect(args).toContain("called function with abc");
      expect(timeCalled).toBe(1);
    });

    it("ToUpperCase - calls callback for invalid arguments - track call", () => {
      const actual = toUpperCaseWithCb("", callBackMock);
      expect(actual).toBeUndefined();
      expect(args).toContain("Invalid arguments!");
      expect(timeCalled).toBe(1);
    });
  });

  it("Calculate complexity", () => {
    const someInfo = {
      length: 5,
      extraInfo: {
        filed1: "someInfo",
        filed2: "someInfo2",
      },
    };

    const actual = calculateComplexity(someInfo as any);
    expect(actual).toBe(10);
  });
});
