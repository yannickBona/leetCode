export const validParentheses = (s: string): boolean => {
  if (s[0] === ")" || s[0] === "]" || s[0] === "}") return false;
  if (
    s[s.length - 1] === "(" ||
    s[s.length - 1] === "[" ||
    s[s.length - 1] === "{"
  )
    return false;
  if (s.length % 2 !== 0) return false;

  const stack: string[] = [];
  const values: { [key: string]: string } = { "{": "}", "[": "]", "(": ")" };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      const poppedItem = stack.pop();
      if (poppedItem === undefined || values[poppedItem] !== s[i]) return false;
    }
  }

  return stack.length === 0;
};
