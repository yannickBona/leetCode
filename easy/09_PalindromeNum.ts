type palidromeType = (x: number) => boolean;

export const isPalindrome: palidromeType = (x) => {
  if (x < 0) return false;
  const arrayNum: string[] = Array.from(String(x), String);
  const reversedNum: number = +arrayNum.reverse().join("");
  return reversedNum === x && true;
};

console.log(isPalindrome(1221));
