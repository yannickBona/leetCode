const reverseString = (string: string): string => {
  if (!string) return "";

  console.log(string[string.length - 1]);
  return string[string.length - 1] + reverseString(string.slice(0, -1));
};
