import {
  PasswordChecker,
  PasswordErrors,
} from "../../app/password_checker/password";

describe("PasswordChecker test suite", () => {
  let sut: PasswordChecker;

  beforeAll(() => {
    sut = new PasswordChecker();
  });

  it("Password with less then 8 char", () => {
    const password = "Dheeraj";
    const actual = sut.checkPassword(password);
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.SHORT);
  });

  it("Password with no upper case letter", () => {
    const password = "dheeraj123@";
    const actual = sut.checkPassword(password);
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.UPPER_CASE);
  });

  it("Password with no lower case letter", () => {
    const password = "DHEERAJ123@";
    const actual = sut.checkPassword(password);
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.LOWER_CASE);
  });

  it("Password with no number", () => {
    const password = "DheerajHHE";
    const actual = sut.checkPassword(password);
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NUMBER);
  });

  it("Correct password case", () => {
    const password = "Dheeraj123@";
    const actual = sut.checkPassword(password);
    expect(actual.valid).toBe(true);
    expect(actual.reasons).toEqual([]);
  });
});
