export function add(input: string): number {

  if (input === "") {
    return 0;
  }

  let numbers = extractNumbers(input);

  const negativeNumbers = numbers.filter(n => n < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(`Negatives not allowed: ${negativeNumbers}`);
  }



  return numbers.reduce((acc, cur) => acc + cur);
}

function extractNumbers(input: string): number[] {
  const delimiter = getDelimiter(input);

  if (input.startsWith("//")) {
    const delimiterIndex = input.indexOf("\n");
    input = input.substring(delimiterIndex + 1);
  }

  const numbers = input
    .replace('\n', delimiter)
    .split(delimiter)
    .map(Number);
  return numbers;
}

function getDelimiter(input: string): string {
  const delimiter = input.match(/\/\/(.*)\n/);
  if (delimiter) {
    return delimiter[1];
  }
  return ",";
}