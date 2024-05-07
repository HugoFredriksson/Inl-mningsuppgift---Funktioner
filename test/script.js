// Funktion för att returnera kvadraten av ett tal
function square(num) {
    return num * num;
}

// Funktion för att summera kvadraten av alla tal mellan min och max
function sumOfSquares(min, max) {
    let total = 0;
    for (let i = min; i <= max; i++) {
        total += square(i);
    }
    return total;
}

// Anropa sumOfSquares med min = 1 och max = 5
const result = sumOfSquares(1, 5);

// Visa resultatet på webbsidan
const outputDiv = document.getElementById("output");
outputDiv.textContent = "Summan av kvadraterna mellan 1 och 5 är: " + result;

// Funktion för att summera alla tal mellan min och max
function sumBetween(min, max) {
    let total = 0;
    for (let i = min; i <= max; i++) {
        total += square(i);
    }
    return total;
}

// Funktion för att returnera kvadraten av ett tal
function square(num) {
    return num * num;
}

// Funktion för att kolla om ett ord är ett palindrom
function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

// Exempel på att använda onclick för att ändra CSS-stilen på ett element
document.getElementById("myButton").onclick = function() {
    const element = document.getElementById("result");
    if (isPalindrome(element.textContent)) {
        element.style.color = "green";
    } else {
        element.style.color = "red";
    }
};