export const required = (value) => {
    if (value) return 'error undefined';

    return 'Field is required';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value === undefined) return 'Void value'
    // if (value) return 'Undefined'
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`

    return undefined;
}