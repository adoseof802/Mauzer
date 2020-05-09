window.validateColor = (color) => {
    let colorRegExp = new RegExp(/^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+%?\s*,){2}(\s*-?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/igm);

    let matchResult = color.match(colorRegExp);

    let isValid = ((matchResult == null) ? false : true);

    // this function returns a <boolean> value (i.e. returns true when the specified color is valid and false when color is invalid)
    return isValid;
}