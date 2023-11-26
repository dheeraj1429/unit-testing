export function toUpperCase(text: string): String {
  if (!text) throw new Error("Please provide a valid string.");
  return text.toUpperCase();
}

export interface StringInfoInterface {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo?: Object;
}

export function getStringInfo(arg: string): StringInfoInterface {
  return {
    lowerCase: arg.toLowerCase(),
    upperCase: arg.toUpperCase(),
    characters: Array.from(arg),
    length: arg.length,
    extraInfo: {},
  };
}

export class StringUtils {
  public toUpperCase(text: string): String {
    if (!text) throw new Error("Invalid provide arguments");
    return text.toUpperCase();
  }
}
