//Count words in paragraph

function wordCount(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}
console.log(wordCount("This is a sample paragraph with some words.")); 
