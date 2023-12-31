const transliterationMap = {
    "А": "A", "Б": "B", "В": "V",
    "Г": "G", "Ґ": "G", "Д": "D",
    "Е": "E", "Є": "Ye", "Ж": "Zh",
    "З": "Z", "И": "Y", "І": "I",
    "Ї": "Yi", "Й": "Y", "К": "K",
    "Л": "L", "М": "M", "Н": "N",
    "О": "O", "П": "P", "Р": "R",
    "С": "S", "Т": "T", "У": "U",
    "Ф": "F", "Х": "H", "Ц": "Ts",
    "Ч": "Ch", "Ш": "Sh", "Щ": "Shch",
    "Ю": "Yu", "Я": "Ya", "'": "",
    "а": "a", "б": "b", "в": "v",
    "г": "g", "ґ": "g", "д": "d",
    "е": "e", "є": "ye", "ж": "zh",
    "з": "z", "и": "y", "і": "i",
    "ї": "yi", "й": "y", "к": "k",
    "л": "l", "м": "m", "н": "n",
    "о": "o", "п": "p", "р": "r",
    "с": "s", "т": "t", "у": "u",
    "ф": "f", "х": "h", "ц": "ts",
    "ч": "ch", "ш": "sh", "щ": "shch",
    "ю": "yu", "я": "ya"
};

function transliterate() {
    const inputField = document.getElementById('inputField');
    const outputField = document.getElementById('outputField');
    const inputText = inputField.value;
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        if (transliterationMap[inputText[i]] !== undefined) {
            outputText += transliterationMap[inputText[i]];
        } else {
            outputText += inputText[i];
        }
    }

    outputField.value = outputText;
}