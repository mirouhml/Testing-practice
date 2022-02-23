const stringLength = (string) => {
    const length = string.length;
    if (length < 1) 
        throw new Error("No text is found.")
    else if (length > 10)
        throw new Error("Text is longer than 10 characters.")
    else
        return string.length;
}

module.exports = stringLength;