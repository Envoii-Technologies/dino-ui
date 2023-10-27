export const capitalizeFirstLetter = (word) => 
{   
    const firstChar = word.charAt(0).toUpperCase();
    const remainingChars = word.slice(1);

    return `${firstChar}${remainingChars}`;
}
