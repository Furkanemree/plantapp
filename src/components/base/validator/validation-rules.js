;
import general from "../../../utils/general";

    const isExisty = function (value) {
        return value !== null && value !== undefined;
    };

const isEmpty = function (value) {
    if (value instanceof Array) {
        return value.length === 0;
    }
    return value === '' || !isExisty(value);
};

const isEmptyTrimed = function (value) {
    if (typeof value === 'string') {
        return value.trim() === '';
    }
    return true;
};

const validations = {
    matchRegexp: (value, regexp) => {
        const validationRegexp = (regexp instanceof RegExp ? regexp : (new RegExp(regexp)));
        return (isEmpty(value) || validationRegexp.test(value));
    },
    isNameSurname: (value) => {
        // const split = value?.split(" ");
        // const lastVal = split[split?.length - 1];
        // && !general.isNullOrEmpty(lastVal?.replace(/\s/g, ''))

        return isEmpty(value) || (value?.includes(" ") && value?.indexOf(" ") !== (value?.length - 1))
    },

    isPhone: value => validations.matchRegexp(value, /\d{1}((\(\d{3}\) ?)|(\d{3})\s) ?\d{3} \d{2} \d{2}/g),

    isEmail: value => validations.matchRegexp(value, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i),

    isEmpty: value => isEmpty(value),
    isUserName: (value) => {
        const password = validations.matchRegexp(value, /^[a-zA-Z0-9]([.-](?![.-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/)
        return password;
    },
    isBool: value => isEmpty(value) || value === true || value === false,
    minArrayLength: (value, min) => isEmpty(value) || !(value instanceof Array) || value?.length >= min,
    minArrayLengthRequired: (value, min) => !isEmpty(value) && !(value instanceof Array) || value?.length >= min,
    isTrue: value => isEmpty(value) || value === true,
    required: value => {
        if (typeof value === 'string' || value instanceof String) {
            // alert(value.replace(/\s/g, '').length);

            return (!isEmpty(value) && (value.replace(/\s/g, '').length !== 0));
        }
        else
            return !isEmpty(value);

    },

    trim: value => !isEmptyTrimed(value),

    isNumber: value => validations.matchRegexp(value, /^\d+$/),

    isFloat: (value) => {
        const isFloatx = validations.matchRegexp(value, /^(?:-?[1-9]\d*|-?0)?(?:\.\d+)?$/i);
        return isFloatx;
    },

    isPositive: (value) => {
        if (isExisty(value)) {
            return (validations.isNumber(value) || validations.isFloat(value)) && value >= 0;
        }
        return true;
    },

    maxNumber: (value, max) => isEmpty(value) || parseInt(value, 10) <= parseInt(max, 10),

    isEqual: (value, otherValue) => isEmpty(value) || value == otherValue,

    minNumber: (value, min) => isEmpty(value) || parseInt(value, 10) >= parseInt(min, 10),

    maxFloat: (value, max) => isEmpty(value) || parseFloat(value) <= parseFloat(max),

    minFloat: (value, min) => isEmpty(value) || parseFloat(value) >= parseFloat(min),

    isString: value => !isEmpty(value) || typeof value === 'string' || value instanceof String,

    minStringLength: (value, length) => (value + "").length >= length,

    maxStringLength: (value, length) => (value + "").length <= length,

    isPassword: (value) => {
        const password = validations.matchRegexp(value, /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*?[#?!@$%^&*-])/)
        return password;
    },

    isUserName: (value) => {
        const password = validations.matchRegexp(value, /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/)
        return password;
    },
};

const messages = {
    isUserName: value => ("validation.isUserName"),
    matchRegexp: (value, regexp) => ("none"),
    isPhone: value => ("validation.phone"),
    isEmail: value => ("validation.email"),
    isEmpty: value => isEmpty(value),
    isNameSurname: () => ("validation.enter_surname"),
    required: value => ("validation.required"),
    trim: value => !isEmptyTrimed(value),
    isNumber: value => ("validation.number"),
    isFloat: (value) => ("validation.float"),
    isPositive: (value) => ("validation.positive_number"),
    maxNumber: (value, max) => ("validation.max_number").replace("[number]", max),
    minNumber: (value, min) => ("validation.min_number").replace("[number]", min),
    minArrayLength: (value, min) => ("validation.min_array_length").replace("[number]", min),
    minArrayLengthRequired: (value, min) => ("validation.min_array_length").replace("[number]", min),

    maxFloat: (value, max) => ("validation.max_number").replace("[number]", max),
    minFloat: (value, min) => ("validation.min_number").replace("[number]", min),
    isString: value => ("validation.string"),
    minStringLength: (value, length) => ("validation.min_string_length").replace("[length]", length),
    maxStringLength: (value, length) => ("validation.max_string_length").replace("[length]", length),
    isPassword: value => ("validation.isPassword"),
    isUserName: value => ("validation.isUserName"),
}

module.exports = {
    ValidationRules: validations,
    ValidationMessages: messages
};
