// Replace wrong word with correct word

function correctfn(str, wrong, correct) {
  let regex = new RegExp(wrong, "g");
  return str.replace(regex, correct);
}

console.log(correctfn("I luv coding and I luv music", "luv", "love"));
