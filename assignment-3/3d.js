//Count vowels and consonants

let input = "JavaScript makes the webpage interactive";
let vowels = input.match(/[aeiou]/gi)?.length || 0;
let consonants = input.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
console.log("Vowels:", vowels, "Consonants:", consonants);
