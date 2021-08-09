// Dorizabelle    
// https://www.linkedin.com/in/dorizabelle/
// https://github.com/Dorizabelle
// https://www.instagram.com/dorizabelle/

//CodeSignal: The Journey Begins
//Question 
    // Given the string, check if it is a palindrome.

    // Example

    // For inputString = "aabaa", the output should be
    // checkPalindrome(inputString) = true;
    // For inputString = "abac", the output should be
    // checkPalindrome(inputString) = false;
    // For inputString = "a", the output should be
    // checkPalindrome(inputString) = true.
    // Input/Output

    // [execution time limit] 4 seconds (js)

    // [input] string inputString

    // A non-empty string consisting of lowercase characters.

    // Guaranteed constraints:
    // 1 ≤ inputString.length ≤ 105.

    // [output] boolean

    // true if inputString is a palindrome, false otherwise.



//My Code
function checkPalindrome(inputString) {
    length = inputString.length
    if (length < 2)
        return true;
        
    for(i=0;i<length/2; i++){
        if(inputString[i] !== inputString[length-1-i]){
            return false
        }
    }
    return true;
}
