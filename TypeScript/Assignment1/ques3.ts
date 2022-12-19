let checkPalindrome = (stringg:string):boolean => {
    return stringg === stringg.split("").reverse().join("");
  };
   
console.log("Is Palindrome? : " + checkPalindrome("madam"));
console.log("Is Palindrome? : " + checkPalindrome("apple"));
   