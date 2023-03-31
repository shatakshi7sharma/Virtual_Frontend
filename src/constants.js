
export const BASE_URL = 'http://localhost:4200/';

export const constants = {
  common: {
    dateFormat: 'dd/MM/yyyy',
    limit: 10,
    page: 0,
    pageOptions: [
      { value: 50, name: "50 Items per page" },
      { value: 100, name: "50-100" },
      { value: 150, name: "100-150" }
    ]
  },

  validations: {
    requiredAndValidNumber: 'This field is required and should be a valid number.',
    noSpecialChar: 'No special character is allowed.',
    noDoubleSpaceAndSpecial: 'No double space or special characters are allowed.',
    sameValidation: 'New and confirm password should be same',
    invalidCharOrDouble: 'Invalid character or double space.',
    required: 'This field is required',
    propertyName: 'Property name field is required',
    noDoubleSpace: 'No double space allowed at once.',
    specialCharacterNot: 'No special characters are allowed',
    propertyType: 'Property type field is required',
    propertyAddress: 'Property address field is required',
    propertyValue: 'Property value field is required',
    propertyDescription: 'Property description field is required',
    date: 'Date field is required',
    invalidEmail: 'invalid email',
    requiredEmail: 'Email is required.',
    requiredPassword: 'Password is required.',
    passwordValidate: 'Password must be 8 characters, atleast one uppercase, lowercase letter and number.',
    validNumber: 'Enter a valid Number',
    maxTwenty: 'Max 20 characters are allowed',
    twoFiftyFive: 'Max 255 characters are allowed',
    maxFifteen: 'Max 15 digits are allowed',
    charactersLeft: ' charaters left.',
  },
};

