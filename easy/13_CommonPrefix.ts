// ["ciao", "cinghiale", "rosso", "rossetto"]

export const LongestCommonPrefix = (strings: string[]) => {
  if (strings.length === 0) return "";

  let idx = 1;
  let prefix = strings[0];

  while (idx < strings.length) {
    console.log("checking if ", strings[idx], " matches ", prefix);
    if (!strings[idx].startsWith(prefix)) {
      console.log("doesnt match");
      prefix = prefix.slice(0, -1);
    } else {
      console.log("incrementing idx");
      idx++;
    }
  }
  return prefix;
};
