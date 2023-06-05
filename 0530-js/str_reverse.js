
function reverseString(str, first, last){
    console.log("first, last, str", first, last, str);

    // Return condition
    if ( first > last )
        return "";
    else{
        // Attach the first character to the end!
        return reverseString(str, first+1, last)+str.charAt(first);
    }

}

str = "Hello, World!"
console.log(str.length)
revStr = reverseString(str, 0, str.length-1)
console.log(revStr)

