"use strict";
function generateUniqueDigitLottoNumbers(count) {
    const generated = new Set(); // Final numbers
    const rumbleForms = new Set(); // Prevent permutations
    while (generated.size < count) {
        const digits = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]); // First digit can't be 0
        const firstDigit = digits[0];
        const otherDigits = shuffle([...Array(10).keys()].filter(d => d !== firstDigit)).slice(0, 2);
        const number = firstDigit.toString() + otherDigits.join("");
        const rumbleKey = number.split("").sort().join("");
        if (!rumbleForms.has(rumbleKey)) {
            rumbleForms.add(rumbleKey);
            generated.add(number);
        }
    }
    return Array.from(generated);
}
// Reuse helpers
function shuffle(array) {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
// 🧠 Generate and log smart numbers
const smartUniqueNumbers = generateUniqueDigitLottoNumbers(10);
console.log("🎯 High-Odds Smart Lotto Numbers:", smartUniqueNumbers);
