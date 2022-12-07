type RomanToIntType = (s: string) => number;

interface Romans {
  I: number;
  V: number;
  X: number;
  L: number;
  C: number;
  D: number;
  M: number;
}

const symbols: Romans = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const RomanToInt: RomanToIntType = (s) => {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const currentValue = symbols[s[i] as keyof Romans];
    const nextValue = symbols[s[i + 1] as keyof Romans];

    currentValue < nextValue
      ? (result -= currentValue)
      : (result += currentValue);
  }
  console.log(result);

  return result;
};

RomanToInt("IXI");
