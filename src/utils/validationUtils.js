import validate from 'validate.js';
import Message from './messageUtils';

let constraints = {
    name: {
        presence: {
            message: Message.Errors.nameBlank
        },
        length: {
            maximum: 30,
            tooLong: Message.Errors.nameLength
        },
        format: {
            pattern: /^[a-zA-Z\s]*$/,
            message: Message.Errors.nameInvalid,
        }
    },
    email: {    
        presence: {
            message: Message.Errors.emailBlank
        },
        format: {
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: Message.Errors.emailValidity,
        }
    },
    password: {
        presence: {
            message: Message.Errors.pwdBlank
        },
        length: {
            maximum: 20,
            minimum: 8,
            message: Message.Errors.pwdLengthMaximum,
        }
    },
    confirmPassword: {
        presence: {
            message: Message.Errors.pwdCBlank
        },
        length: {
            maximum: 4,
            minimum: 4,
            message: Message.Errors.pwdLengthMaximum,
        }
    },
    passwordBlank: {
        presence: {
            message: Message.Errors.pwdBlank
        }
    },
    phoneNo: {
        presence: {
            message: Message.Errors.phoneBlank
        },
        numericality: {
            notValid: Message.Errors.phoneInvalid
        },
        length: {
            maximum: 15,
            minimum: 6,
            tooLong: Message.Errors.phoneTooLong,
            tooShort: Message.Errors.phoneTooShort
        },
    },
    age: {
        presence: {
            message: Message.Errors.ageBlank
        },
        numericality: {
            onlyInteger: true,
            strict: true,
            lessThanOrEqualTo: 100,
            greaterThanOrEqualTo: 5,
            notGreaterThanOrEqualTo: Message.Errors.ageLess,
            notLessThanOrEqualTo: Message.Errors.ageGrater,
            notValid: Message.Errors.ageInvalid,
            notInteger: Message.Errors.ageInvalid,
        }
    },
    couponCode: {
        presence: {
            message: Message.Errors.couponCodeBlank
        },
    },
    comment: {
        presence: {
            message: Message.Errors.commentBlank
        },
    },
    flagComment: {
        presence: {
            message: Message.Errors.flagCommentBlank
        },
    },
    childName: {
        presence: {
            message: Message.Errors.childError
        },
        length: {
            maximum: 200,
            tooLong: Message.Errors.ChildNameLength
        },
    },
    countryCode: {
        presence: {
            message: Message.Errors.countryCodeBlank
        },
    },
    playListName: {
        presence: {
            message: Message.Errors.playListNameBlank
        }
    },
};

export function validation(fieldName, value) {
    let formValues = {};
    formValues[fieldName] = value === '' ? null : value;

    if (fieldName === 'name') {
        formValues[fieldName] = value.replace(/[\s&\/\\#,+()$~%.'":*?<>{}]/g, '') === '' ? null : value;
    }

    let formFields = {};
    formFields[fieldName] = constraints[fieldName];

    let result = validate(formValues, formFields, { fullMessages: false });

    if (result) {
        return result[fieldName][0]
    }
    return null
}


let PasswordConstraints = {
    confirmPassword: {
        equality: {
            attribute: 'password',
            message: Message.Errors.pwdMisMatch
        }
    }
};

/**
 * @return {null}
 */
export function PasswordValidate(password, confirmPassword) {
    let result1 = validate({
        password: password,
        confirmPassword: confirmPassword
    }, PasswordConstraints, { fullMessages: false });

    if (result1 !== null && result1 !== undefined) {
        if (result1['confirmPassword'] !== undefined)
            return result1['confirmPassword'][0];
    }
    return null;

}