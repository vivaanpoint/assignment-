// Remove states starting with vowels

let states = ["Andhra Pradesh", "Uttar Pradesh", "Odisha", "Kerala", "Punjab", "Maharashtra", "Tamil Nadu"];
let filteredStates = states.filter(state => !['A', 'E', 'I', 'O', 'U'].includes(state[0].toUpperCase()));
console.log(filteredStates);
