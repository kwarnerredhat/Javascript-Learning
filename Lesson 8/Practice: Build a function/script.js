function KhalilFunction(sentence) {
  const words = sentence.split(" ");
 const capitalizedWords = words.map(word => {
   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
const capitalizedSentence = capitalizedWords.join(" ");
return capitalizedSentence;
}
const inputSentence = "Hey this is Khalil the fashion connoisseur.";
const capitalizedSentence = KhalilFunction(inputSentence);
console.log(capitalizedSentence);
 


