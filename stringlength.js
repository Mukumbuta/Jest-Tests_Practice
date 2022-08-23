const stringLength = (name) => {
    let strLength = name.length;
    if(strLength > 0 && strLength <= 10) {
        return strLength;
    } else {
        return `Error: Name must be between 1 and 10 character(s) long!`;
    }
}

module.exports = stringLength;