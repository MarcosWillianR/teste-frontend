export function getInitialsName(str: string): string {
  if (str) {
    const words = str.split(' ');
    if (words.length) {
      if (words.length === 1) {
        return words[0][0];
      }
      if (words.length > 2) {
        return `${words[0][0]}${words[words.length - 1][0]}`;
      }
      return `${words[0][0]}${words[1][0]}`;
    }
  }

  return '';
}
