export function getLetterMatchFunction(guessed, secret) {
  let res = guessed.split("").filter((char) => {
    if (secret.includes(char)) {
      secret = secret.replace(char, "");
      return true;
    }

    return false;
  });

  return res.length;
}
