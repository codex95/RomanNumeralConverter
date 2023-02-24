function convertToRoman(num) {
  // List all pairs of roman arabic numerals as object
  const romArabicNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  // Create an empty string as result
  let result = "";

  // Loop through romArabicNum object
  for (let prop in romArabicNum) {
    while(num >= romArabicNum[prop]) {
      result += prop; // Add current prop to result
      num -= romArabicNum[prop]; // Decrease num by current prop value
    };
  }

 return result;
}

convertToRoman(36);
