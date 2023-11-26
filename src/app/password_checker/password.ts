export enum PasswordErrors {
  SHORT = "password is too short!",
  UPPER_CASE = "Your password needs at least one upper case letter!",
  LOWER_CASE = "Your password needs at least one lower case letter!",
  NUMBER = "Your password needs a number!",
}

export interface CheckResult {
  valid: boolean;
  reasons: PasswordErrors[];
}

export class PasswordChecker {
  public checkPassword(password: string): CheckResult {
    if (password.length < 8) {
      return { valid: false, reasons: [PasswordErrors.SHORT] };
    }

    if (password.search(/[a-z]/) == -1) {
      return { valid: false, reasons: [PasswordErrors.LOWER_CASE] };
    }

    if (password.search(/[A-Z]/) == -1) {
      return { valid: false, reasons: [PasswordErrors.UPPER_CASE] };
    }

    if (password.search(/[0-9]/) < 1) {
      return { valid: false, reasons: [PasswordErrors.NUMBER] };
    }

    return {
      valid: true,
      reasons: [],
    };
  }
}
