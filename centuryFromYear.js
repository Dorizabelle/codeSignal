// Dorizabelle    
// https://www.linkedin.com/in/dorizabelle/
// https://github.com/Dorizabelle
// https://www.instagram.com/dorizabelle/

//CodeSignal: The Journey Begins
//Question 
    // Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

    // Example

    // For year = 1905, the output should be
    // centuryFromYear(year) = 20;
    // For year = 1700, the output should be
    // centuryFromYear(year) = 17.
    // Input/Output

    // [execution time limit] 4 seconds (js)

    // [input] integer year

    // A positive integer, designating the year.

    // Guaranteed constraints:
    // 1 ≤ year ≤ 2005.

    // [output] integer

    // The number of the century the year is in.

//My Code
function centuryFromYear(year) {
    century = Math.floor((year-1)/100)+1;

    // if (year%2 === 0)
    //     century = Math.floor(year/100)+1;
    // else
    //     century = Math.floor(year/100)+1;
    return century;
}
